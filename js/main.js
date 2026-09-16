(function () {
  const SECTION_COLORS = {
    climate: 'var(--series-1)', poverty: 'var(--series-2)', health: 'var(--series-3)', biodiversity: 'var(--series-6)',
    energy: 'var(--series-1)', markets: 'var(--series-2)', breakthroughs: 'var(--series-3)', conservation: 'var(--series-6)',
    information: 'var(--series-7)'
  };

  function resolveVar(cssVar) {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar.match(/--[\w-]+/)[0]).trim() || cssVar;
  }

  const TREND_META = {
    improving: { label: 'Improving', className: 'trend-good' },
    worsening: { label: 'Worsening', className: 'trend-bad' },
    mixed: { label: 'Mixed', className: 'trend-mixed' }
  };

  function buildExplainerCard(dataset) {
    const card = document.createElement('div');
    card.className = 'chart-card explainer-card';
    const h3 = document.createElement('h3');
    h3.textContent = dataset.title;
    card.appendChild(h3);
    if (dataset.takeaway) {
      const p = document.createElement('p');
      p.className = 'takeaway';
      p.textContent = dataset.takeaway;
      card.appendChild(p);
    }
    const grid = document.createElement('div');
    grid.className = 'explainer-grid';
    dataset.items.forEach(item => {
      const block = document.createElement('div');
      block.className = 'explainer-item';
      const name = document.createElement('h4');
      name.textContent = item.name;
      const desc = document.createElement('p');
      desc.textContent = item.description;
      const list = document.createElement('ul');
      item.examples.forEach(ex => {
        const li = document.createElement('li');
        li.textContent = ex;
        list.appendChild(li);
      });
      block.append(name, desc, list);
      grid.appendChild(block);
    });
    card.appendChild(grid);
    if (dataset.source) {
      const src = document.createElement('div');
      src.className = 'chart-source';
      const link = document.createElement('a');
      link.href = dataset.source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = dataset.source.name;
      src.append(document.createTextNode('Source: '), link);
      card.appendChild(src);
    }
    return card;
  }

  function buildChartCard(dataset, colorVar) {
    if (dataset.type === 'explainer') return buildExplainerCard(dataset);
    const card = document.createElement('div');
    card.className = 'chart-card';

    const head = document.createElement('div');
    head.className = 'chart-head';
    const titleWrap = document.createElement('div');
    titleWrap.className = 'chart-title-wrap';
    const h3 = document.createElement('h3');
    h3.textContent = dataset.title;
    titleWrap.appendChild(h3);
    if (dataset.trend && TREND_META[dataset.trend]) {
      const meta = TREND_META[dataset.trend];
      const badge = document.createElement('span');
      badge.className = 'trend-badge ' + meta.className;
      badge.textContent = meta.label;
      titleWrap.appendChild(badge);
    }
    head.appendChild(titleWrap);

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'table-toggle';
    toggleBtn.type = 'button';
    toggleBtn.textContent = 'View as table';
    head.appendChild(toggleBtn);
    card.appendChild(head);

    if (dataset.takeaway) {
      const p = document.createElement('p');
      p.className = 'takeaway';
      p.textContent = dataset.takeaway;
      card.appendChild(p);
    }

    const chartEl = document.createElement('div');
    const tableEl = document.createElement('div');
    tableEl.hidden = true;
    card.appendChild(chartEl);
    card.appendChild(tableEl);

    const color = resolveVar(colorVar);
    const commonOpts = {
      unit: dataset.unit || '',
      color,
      seriesLabel: dataset.seriesLabel || dataset.title,
      ariaLabel: dataset.title,
      tableTarget: tableEl,
      logScale: dataset.logScale,
      dotsOnly: dataset.dotsOnly
    };

    if (dataset.panels) {
      dataset.panels.forEach((panel, i) => {
        const heading = document.createElement('h4');
        heading.className = 'panel-title';
        heading.textContent = panel.subtitle;
        const panelChart = document.createElement('div');
        const panelTable = document.createElement('div');
        const tableHeading = heading.cloneNode(true);
        chartEl.append(heading, panelChart);
        tableEl.append(tableHeading, panelTable);
        const panelColor = color;
        const panelOpts = Object.assign({}, commonOpts, {
          data: panel.data, unit: panel.unit || '', seriesLabel: panel.seriesLabel,
          ariaLabel: panel.subtitle, color: panelColor, tableTarget: panelTable,
          logScale: panel.logScale
        });
        if (panel.type === 'line') {
          if (panel.series) panelOpts.series = panel.series.map(s => Object.assign({}, s, { color: resolveVar(s.color) }));
          window.Viz.renderLineChart(panelChart, panelOpts);
        } else {
          window.Viz.renderBarChart(panelChart, panelOpts);
        }
      });
    } else if (dataset.type === 'bar') {
      window.Viz.renderBarChart(chartEl, Object.assign({ data: dataset.data, legend: dataset.legend }, commonOpts));
    } else if (dataset.series) {
      const resolvedSeries = dataset.series.map(s => Object.assign({}, s, { color: resolveVar(s.color) }));
      window.Viz.renderLineChart(chartEl, Object.assign({}, commonOpts, { series: resolvedSeries }));
    } else {
      window.Viz.renderLineChart(chartEl, Object.assign({ data: dataset.data }, commonOpts));
    }

    window.Viz.wireTableToggle(toggleBtn, chartEl, tableEl);

    if (dataset.source) {
      const src = document.createElement('div');
      src.className = 'chart-source';
      const link = document.createElement('a');
      link.href = dataset.source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = dataset.source.name;
      src.appendChild(document.createTextNode('Source: '));
      src.appendChild(link);
      card.appendChild(src);
    }

    return card;
  }

  function renderTopic(key) {
    const topic = window.SITE_DATA && window.SITE_DATA[key];
    if (!topic) return;
    if (!topic.datasets) return;
    topic.datasets.forEach(dataset => {
      const hostKey = dataset.section || key;
      const host = document.getElementById(hostKey + '-charts');
      if (!host) return;
      const accent = SECTION_COLORS[hostKey] || 'var(--series-1)';
      host.closest('.section').style.setProperty('--section-accent', accent);
      host.appendChild(buildChartCard(dataset, accent));
    });
  }

  const VIEWS = ['problems', 'solutions'];

  function setView(view, scrollTop) {
    if (!VIEWS.includes(view)) view = 'problems';
    document.querySelectorAll('[data-view-content],[data-view-nav],[data-view-pills]').forEach(node => {
      const owner = node.dataset.viewContent || node.dataset.viewNav || node.dataset.viewPills;
      node.hidden = owner !== view;
    });
    document.querySelectorAll('[data-view-btn]').forEach(btn => {
      const active = btn.dataset.viewBtn === view;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    try { localStorage.setItem('view', view); } catch (e) {}
    if (scrollTop) window.scrollTo({ top: 0 });
  }

  function viewForHash(hash) {
    const target = hash && hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
    const container = target && target.closest('[data-view-content]');
    return container ? container.dataset.viewContent : null;
  }

  function initViews() {
    let stored = null;
    try { stored = localStorage.getItem('view'); } catch (e) {}
    const hashView = viewForHash(location.hash);
    setView(hashView || stored || 'problems', false);
    if (hashView) requestAnimationFrame(() => document.getElementById(location.hash.slice(1)).scrollIntoView());

    document.querySelectorAll('[data-view-btn]').forEach(btn => {
      btn.addEventListener('click', () => setView(btn.dataset.viewBtn, true));
    });

    window.addEventListener('hashchange', () => {
      const view = viewForHash(location.hash);
      if (view) {
        setView(view, false);
        document.getElementById(location.hash.slice(1)).scrollIntoView();
      }
    });
  }

  function renderAll() {
    Object.entries(SECTION_COLORS).forEach(([id, accent]) => {
      const section = document.getElementById(id);
      if (section) section.style.setProperty('--section-accent', accent);
    });
    document.querySelectorAll('.chart-grid').forEach(host => { host.textContent = ''; });
    ['climate', 'poverty', 'health', 'biodiversity', 'innovation', 'markets', 'conservation'].forEach(renderTopic);
  }

  function init() {
    let stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (stored === 'dark' || stored === 'light') document.documentElement.setAttribute('data-theme', stored);

    renderAll();
    initViews();
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    document.getElementById('theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme')
        || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      renderAll();
    });
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!document.documentElement.hasAttribute('data-theme')) renderAll();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
