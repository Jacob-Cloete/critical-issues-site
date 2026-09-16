(function () {
  const SLOT_ORDER = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)', 'var(--series-4)', 'var(--series-5)', 'var(--series-6)', 'var(--series-7)', 'var(--series-8)'];

  function resolveVar(cssVar) {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar.match(/--[\w-]+/)[0]).trim() || cssVar;
  }

  const TREND_META = {
    improving: { label: 'Improving', className: 'trend-good' },
    worsening: { label: 'Worsening', className: 'trend-bad' },
    mixed: { label: 'Mixed', className: 'trend-mixed' }
  };

  function buildChartCard(dataset, colorVar) {
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

    if (dataset.type === 'bar') {
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
    const counts = {};
    topic.datasets.forEach(dataset => {
      const hostKey = dataset.section || key;
      const host = document.getElementById(hostKey + '-charts');
      if (!host) return;
      const i = counts[hostKey] = (counts[hostKey] || 0) + 1;
      host.appendChild(buildChartCard(dataset, SLOT_ORDER[(i - 1) % SLOT_ORDER.length]));
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

  function init() {
    ['climate', 'poverty', 'health', 'biodiversity', 'innovation', 'markets'].forEach(renderTopic);
    initViews();
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const toggle = document.getElementById('theme-toggle');
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') document.documentElement.setAttribute('data-theme', stored);
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
