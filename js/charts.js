/* Minimal dependency-free SVG chart engine: line charts (single series,
   time-based) and bar charts (categorical comparison). Built to the
   dataviz mark spec: 2px lines, >=8px end markers, 4px rounded bar caps,
   hairline gridlines, crosshair + tooltip on hover, table-view fallback. */

(function (global) {
  const NS = 'http://www.w3.org/2000/svg';

  function el(tag, attrs, parent) {
    const node = document.createElementNS(NS, tag);
    if (attrs) {
      for (const k in attrs) node.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(node);
    return node;
  }

  function formatCompact(value, unit) {
    unit = unit || '';
    const abs = Math.abs(value);
    let out;
    if (abs >= 1e9) out = (value / 1e9).toFixed(abs >= 1e10 ? 0 : 1).replace(/\.0$/, '') + 'B';
    else if (abs >= 1e6) out = (value / 1e6).toFixed(abs >= 1e7 ? 0 : 1).replace(/\.0$/, '') + 'M';
    else if (abs >= 1e3) out = (value / 1e3).toFixed(abs >= 1e4 ? 0 : 1).replace(/\.0$/, '') + 'K';
    else if (Number.isInteger(value)) out = String(value);
    else out = value.toFixed(Math.abs(value) < 10 ? 2 : 1);
    if (unit === '$') return (value < 0 ? '-$' + out.slice(1) : '$' + out);
    return out + unit;
  }

  const SUPERSCRIPT = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻' };

  function formatScientific(value, unit) {
    if (Math.abs(value) < 1e6) return formatCompact(value, unit);
    const [mant, exp] = value.toExponential(1).split('e');
    const sup = String(Number(exp)).split('').map(c => SUPERSCRIPT[c]).join('');
    return `${mant}×10${sup}${unit || ''}`;
  }

  function niceTicks(min, max, count) {
    const range = max - min || 1;
    const rawStep = range / count;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const norm = rawStep / mag;
    let step;
    if (norm < 1.5) step = 1 * mag;
    else if (norm < 3) step = 2 * mag;
    else if (norm < 7) step = 5 * mag;
    else step = 10 * mag;
    const niceMin = Math.floor(min / step) * step;
    const niceMax = Math.ceil(max / step) * step;
    const ticks = [];
    for (let v = niceMin; v <= niceMax + step * 0.001; v += step) ticks.push(Math.round(v * 1e6) / 1e6);
    return ticks;
  }

  function getTooltip(root) {
    let tip = root.querySelector('.viz-tooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'viz-tooltip';
      root.appendChild(tip);
    }
    return tip;
  }

  function showTooltip(tip, root, x, y, headText, rows) {
    tip.textContent = '';
    const head = document.createElement('div');
    head.className = 't-head';
    head.textContent = headText;
    tip.appendChild(head);
    rows.forEach(r => {
      const row = document.createElement('div');
      row.className = 't-row';
      const key = document.createElement('div');
      key.className = 't-key';
      if (r.color) {
        const line = document.createElement('span');
        line.className = 'line';
        line.style.background = r.color;
        key.appendChild(line);
      }
      const label = document.createElement('span');
      label.textContent = r.label;
      key.appendChild(label);
      const val = document.createElement('div');
      val.className = 't-val';
      val.textContent = r.value;
      row.appendChild(key);
      row.appendChild(val);
      tip.appendChild(row);
    });
    const rect = root.getBoundingClientRect();
    tip.style.left = x + 'px';
    tip.style.top = (y - 12) + 'px';
    tip.classList.add('visible');
  }

  function hideTooltip(tip) {
    tip.classList.remove('visible');
  }

  /* ---------------- Line chart (single series, x = year) ---------------- */

  function renderLineChart(container, opts) {
    // Accepts either opts.data ([{x,y}], single series) or opts.series
    // ([{label, color, data:[{x,y}]}], multi-series with legend).
    const unit = opts.unit || '';
    const defaultColor = opts.color || 'var(--series-1)';
    const series = opts.series
      ? opts.series
      : [{ label: opts.seriesLabel || 'Value', color: defaultColor, data: opts.data }];

    const width = 640, height = 260;
    const pad = { top: 16, right: 18, bottom: 28, left: 44 };
    const innerW = width - pad.left - pad.right;
    const innerH = height - pad.top - pad.bottom;

    container.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'chart-viz';
    container.appendChild(wrap);

    const svg = el('svg', { viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': opts.ariaLabel || '' }, wrap);

    const log = !!opts.logScale;
    const dotsOnly = !!opts.dotsOnly;
    const fmt = (v) => log ? formatScientific(v, unit) : formatCompact(v, unit);

    const allPoints = series.flatMap(s => s.data);
    const xs = allPoints.map(d => d.x);
    const ys = allPoints.map(d => log ? Math.log10(d.y) : d.y);
    const xMin = Math.min(...xs), xMax = Math.max(...xs);
    const yMinRaw = Math.min(...ys), yMaxRaw = Math.max(...ys);
    let yTicks;
    if (log) {
      const lo = Math.floor(yMinRaw), hi = Math.ceil(yMaxRaw);
      const step = Math.max(1, Math.ceil((hi - lo) / 5));
      yTicks = [];
      for (let t = lo; t <= hi + step - 1; t += step) yTicks.push(t);
    } else {
      yTicks = niceTicks(Math.min(0, yMinRaw), yMaxRaw, 4);
    }
    const yMin = yTicks[0], yMax = yTicks[yTicks.length - 1];

    const xScale = (x) => pad.left + ((x - xMin) / (xMax - xMin || 1)) * innerW;
    const yScale = (y) => {
      const v = log ? Math.log10(y) : y;
      return pad.top + innerH - ((v - yMin) / (yMax - yMin || 1)) * innerH;
    };

    // gridlines + y ticks (tick values are exponents when log-scaled)
    yTicks.forEach(t => {
      const y = pad.top + innerH - ((t - yMin) / (yMax - yMin || 1)) * innerH;
      el('line', { x1: pad.left, x2: width - pad.right, y1: y, y2: y, stroke: 'var(--gridline)', 'stroke-width': 1 }, svg);
      const label = el('text', {
        x: pad.left - 8, y: y + 4, 'text-anchor': 'end',
        fill: 'var(--text-muted)', 'font-size': 10.5, 'font-family': 'var(--font)'
      }, svg);
      if (log && unit && t >= 0 && t < 12) {
        label.textContent = formatCompact(Math.pow(10, t), unit);
      } else if (log) {
        label.appendChild(document.createTextNode('10'));
        const sup = el('tspan', { dy: -4, 'font-size': 8 }, label);
        sup.textContent = String(t);
      } else {
        label.textContent = formatCompact(t, unit);
      }
    });

    // baseline
    el('line', { x1: pad.left, x2: width - pad.right, y1: pad.top + innerH, y2: pad.top + innerH, stroke: 'var(--baseline)', 'stroke-width': 1 }, svg);

    // x-axis labels (start, mid, end)
    const xTickVals = [xMin, Math.round((xMin + xMax) / 2), xMax];
    xTickVals.forEach(t => {
      const x = xScale(t);
      const label = el('text', {
        x, y: height - 8, 'text-anchor': 'middle',
        fill: 'var(--text-muted)', 'font-size': 10.5, 'font-family': 'var(--font)'
      }, svg);
      label.textContent = String(t);
    });

    const single = series.length === 1;

    series.forEach(s => {
      const data = s.data;
      const color = s.color || defaultColor;

      if (dotsOnly) {
        data.forEach(d => {
          el('circle', { cx: xScale(d.x), cy: yScale(d.y), r: 4.5, fill: color, stroke: 'var(--surface-1)', 'stroke-width': 2 }, svg);
        });
        return;
      }

      if (single && !log) {
        const areaPoints = data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(' L ');
        const baseY = yScale(Math.max(yMin, 0));
        const areaPath = `M ${xScale(data[0].x)},${baseY} L ${areaPoints} L ${xScale(data[data.length - 1].x)},${baseY} Z`;
        el('path', { d: areaPath, fill: color, opacity: 0.1, stroke: 'none' }, svg);
      }

      const linePoints = data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(' L ');
      el('path', { d: `M ${linePoints}`, fill: 'none', stroke: color, 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);

      const last = data[data.length - 1];
      el('circle', { cx: xScale(last.x), cy: yScale(last.y), r: 5, fill: color, stroke: 'var(--surface-1)', 'stroke-width': 2 }, svg);

      const endLabel = el('text', {
        x: xScale(last.x), y: yScale(last.y) - 10, 'text-anchor': 'end',
        fill: 'var(--text-primary)', 'font-size': 11, 'font-weight': 650, 'font-family': 'var(--font)'
      }, svg);
      endLabel.textContent = fmt(last.y);
    });

    // crosshair (shared across series)
    const crosshair = el('line', { x1: 0, x2: 0, y1: pad.top, y2: pad.top + innerH, stroke: 'var(--baseline)', 'stroke-width': 1, opacity: 0 }, svg);
    const hoverDots = series.map(s => el('circle', { r: 5, fill: s.color || defaultColor, stroke: 'var(--surface-1)', 'stroke-width': 2, opacity: 0 }, svg));
    const hitRect = el('rect', { x: pad.left, y: pad.top, width: innerW, height: innerH, fill: 'transparent' }, svg);

    const tip = getTooltip(wrap);

    function findNearestX(mouseX) {
      let nearest = series[0].data[0].x, minDist = Infinity;
      series[0].data.forEach(d => {
        const dist = Math.abs(xScale(d.x) - mouseX);
        if (dist < minDist) { minDist = dist; nearest = d.x; }
      });
      return nearest;
    }

    function onMoveDots(evt) {
      const svgRect = svg.getBoundingClientRect();
      const mx = (evt.clientX - svgRect.left) * (width / svgRect.width);
      const my = (evt.clientY - svgRect.top) * (height / svgRect.height);
      let best = null, bestDist = Infinity;
      series[0].data.forEach(d => {
        const dist = Math.hypot(xScale(d.x) - mx, yScale(d.y) - my);
        if (dist < bestDist) { bestDist = dist; best = d; }
      });
      const px = xScale(best.x), py = yScale(best.y);
      hoverDots[0].setAttribute('cx', px);
      hoverDots[0].setAttribute('cy', py);
      hoverDots[0].setAttribute('opacity', 1);
      const head = best.label ? `${best.label} (${best.x})` : String(best.x);
      showTooltip(tip, wrap, px * (svgRect.width / width), py * (svgRect.height / height), head, [
        { color: series[0].color || defaultColor, label: series[0].label, value: fmt(best.y) }
      ]);
    }

    function onMove(evt) {
      if (dotsOnly) return onMoveDots(evt);
      const svgRect = svg.getBoundingClientRect();
      const scaleX = width / svgRect.width;
      const mouseX = (evt.clientX - svgRect.left) * scaleX;
      const nearestX = findNearestX(mouseX);
      const px = xScale(nearestX);
      crosshair.setAttribute('x1', px);
      crosshair.setAttribute('x2', px);
      crosshair.setAttribute('opacity', 1);

      const scaleXpx = svgRect.width / width;
      const scaleYpx = svgRect.height / height;
      const rows = [];
      let py = pad.top;
      series.forEach((s, i) => {
        const point = s.data.reduce((a, b) => Math.abs(a.x - nearestX) < Math.abs(b.x - nearestX) ? a : b);
        const y = yScale(point.y);
        hoverDots[i].setAttribute('cx', px);
        hoverDots[i].setAttribute('cy', y);
        hoverDots[i].setAttribute('opacity', 1);
        py = Math.min(py, y);
        rows.push({ color: s.color || defaultColor, label: s.label, value: fmt(point.y) });
      });
      showTooltip(tip, wrap, px * scaleXpx, py * scaleYpx, String(nearestX), rows);
    }
    function onLeave() {
      crosshair.setAttribute('opacity', 0);
      hoverDots.forEach(d => d.setAttribute('opacity', 0));
      hideTooltip(tip);
    }
    hitRect.addEventListener('pointermove', onMove);
    hitRect.addEventListener('pointerleave', onLeave);

    if (!single) {
      const legend = document.createElement('div');
      legend.className = 'legend';
      series.forEach(s => {
        const item = document.createElement('div');
        item.className = 'item';
        const swatch = document.createElement('span');
        swatch.className = 'swatch';
        swatch.style.background = s.color || defaultColor;
        const label = document.createElement('span');
        label.textContent = s.label;
        item.appendChild(swatch);
        item.appendChild(label);
        legend.appendChild(item);
      });
      container.appendChild(legend);
    }

    if (opts.tableTarget) {
      if (dotsOnly) {
        buildTable(opts.tableTarget, ['System', 'Year', series[0].label], series[0].data.map(d => [d.label || '', String(d.x), fmt(d.y)]));
      } else if (single) {
        buildTable(opts.tableTarget, ['Year', series[0].label], series[0].data.map(d => [String(d.x), fmt(d.y)]));
      } else {
        const years = [...new Set(series.flatMap(s => s.data.map(d => d.x)))].sort((a, b) => a - b);
        const rows = years.map(y => [String(y), ...series.map(s => {
          const point = s.data.find(d => d.x === y);
          return point ? formatCompact(point.y, unit) : '—';
        })]);
        buildTable(opts.tableTarget, ['Year', ...series.map(s => s.label)], rows);
      }
    }
  }

  /* ---------------- Bar chart (categorical comparison) ---------------- */

  function renderBarChart(container, opts) {
    const items = opts.data; // [{category, value}]
    const unit = opts.unit || '';
    const color = opts.color || 'var(--series-1)';
    const barMax = 24;
    const gap = 2;
    const rowH = 34;
    const width = 640;
    const hasNegative = items.some(i => i.value < 0);
    const catLabelX = 120; // fixed position for the category label, regardless of mode
    // Reserve extra room left of the bar area for negative-bar value labels,
    // so they never collide with the category labels further left.
    const negLabelPad = hasNegative ? 44 : 0;
    const pad = { top: 8, right: 70, bottom: hasNegative ? 24 : 8, left: 130 + negLabelPad };
    const innerW = width - pad.left - pad.right;
    const height = pad.top + pad.bottom + items.length * rowH;

    container.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'chart-viz';
    container.appendChild(wrap);

    const svg = el('svg', { viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': opts.ariaLabel || '' }, wrap);

    const minVal = Math.min(...items.map(i => i.value), 0);
    const maxVal = Math.max(...items.map(i => i.value), 0);
    const domain = (maxVal - minVal) || 1;
    const scaleX = (v) => pad.left + ((v - minVal) / domain) * innerW;
    const zeroX = scaleX(0);

    if (hasNegative) {
      el('line', { x1: zeroX, x2: zeroX, y1: pad.top, y2: pad.top + items.length * rowH, stroke: 'var(--baseline)', 'stroke-width': 1 }, svg);
      [minVal, 0, maxVal].forEach(t => {
        const label = el('text', {
          x: scaleX(t), y: pad.top + items.length * rowH + 16, 'text-anchor': 'middle',
          fill: 'var(--text-muted)', 'font-size': 10.5, 'font-family': 'var(--font)'
        }, svg);
        label.textContent = formatCompact(t, unit);
      });
    }

    const tip = getTooltip(wrap);

    items.forEach((item, i) => {
      const y = pad.top + i * rowH;
      const barH = barMax;
      const barY = y + (rowH - barH) / 2;
      const valueX = scaleX(item.value);
      const positive = item.value >= 0;
      const barX = positive ? zeroX : valueX;
      const barW = Math.max(Math.abs(valueX - zeroX) - (hasNegative ? gap / 2 : gap), 2);

      const label = el('text', {
        x: catLabelX, y: barY + barH / 2 + 4, 'text-anchor': 'end',
        fill: 'var(--text-secondary)', 'font-size': 11.5, 'font-family': 'var(--font)'
      }, svg);
      label.textContent = item.category;

      const rowColor = item.color || color;
      const bar = el('rect', {
        x: barX, y: barY, width: barW, height: barH,
        rx: 4, ry: 4, fill: rowColor
      }, svg);

      const valueLabel = el('text', {
        x: positive ? valueX + 8 : valueX - 8, y: barY + barH / 2 + 4,
        'text-anchor': positive ? 'start' : 'end',
        fill: 'var(--text-primary)', 'font-size': 11.5, 'font-weight': 650, 'font-family': 'var(--font)'
      }, svg);
      valueLabel.textContent = (positive && hasNegative ? '+' : '') + formatCompact(item.value, unit);

      const hitRow = el('rect', {
        x: 0, y, width, height: rowH, fill: 'transparent'
      }, svg);

      function activate(evt) {
        bar.setAttribute('opacity', 0.82);
        const svgRect = svg.getBoundingClientRect();
        const scaleXpx = svgRect.width / width;
        const scaleYpx = svgRect.height / height;
        showTooltip(tip, wrap, ((barX + barX + barW) / 2) * scaleXpx, (barY) * scaleYpx, item.category, [
          { color: rowColor, label: opts.seriesLabel || 'Value', value: formatCompact(item.value, unit) }
        ]);
      }
      function deactivate() {
        bar.setAttribute('opacity', 1);
        hideTooltip(tip);
      }
      hitRow.addEventListener('pointermove', activate);
      hitRow.addEventListener('pointerenter', activate);
      hitRow.addEventListener('pointerleave', deactivate);
    });

    if (opts.legend && opts.legend.length) {
      const legend = document.createElement('div');
      legend.className = 'legend';
      opts.legend.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'item';
        const swatch = document.createElement('span');
        swatch.className = 'swatch bar';
        swatch.style.background = entry.color;
        const label = document.createElement('span');
        label.textContent = entry.label;
        item.appendChild(swatch);
        item.appendChild(label);
        legend.appendChild(item);
      });
      container.appendChild(legend);
    }

    if (opts.tableTarget) {
      const rows = items.map(i => opts.legend ? [i.category, formatCompact(i.value, unit), i.legendLabel || ''] : [i.category, formatCompact(i.value, unit)]);
      const headers = opts.legend ? ['Category', opts.seriesLabel || 'Value', 'Classification'] : ['Category', opts.seriesLabel || 'Value'];
      buildTable(opts.tableTarget, headers, rows);
    }
  }

  /* ---------------- Table fallback ---------------- */

  function buildTable(target, headers, rows) {
    target.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'data-table-wrap';
    const table = document.createElement('table');
    table.className = 'data-table';
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');
    headers.forEach(h => {
      const th = document.createElement('th');
      th.textContent = h;
      trh.appendChild(th);
    });
    thead.appendChild(trh);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    rows.forEach(r => {
      const tr = document.createElement('tr');
      r.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    target.appendChild(wrap);
  }

  function wireTableToggle(button, chartEl, tableEl) {
    button.addEventListener('click', () => {
      const showing = !tableEl.hidden;
      tableEl.hidden = showing;
      chartEl.hidden = !showing;
      button.textContent = showing ? 'View as table' : 'View as chart';
    });
  }

  global.Viz = { renderLineChart, renderBarChart, buildTable, wireTableToggle, formatCompact };
})(window);
