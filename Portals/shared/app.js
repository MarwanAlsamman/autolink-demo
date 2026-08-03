/* ============================================================
   AutoLink Portals — shared helpers
   i18n (AR-first, EN toggle), fake auth, toasts, modals,
   hand-drawn SVG charts (bars / line / donut) — zero deps,
   works from file:// with no network.
   ============================================================ */

const AL = (() => {
  /* ---------- i18n ---------- */
  const COMMON_I18N = {
    ar: {
      logout: 'تسجيل الخروج', lang_ar: 'ع', lang_en: 'EN',
      login_title: 'تسجيل الدخول', login_sub: 'أدخل أي بيانات — هذه نسخة تجريبية للعرض',
      username: 'اسم المستخدم', password: 'كلمة المرور',
      login_btn: 'دخول', demo_btn: 'دخول تجريبي سريع',
      demo_note: 'نسخة عرض للمستثمرين — أي اسم مستخدم وكلمة مرور تعمل، أو استخدم الدخول التجريبي.',
      tagline: 'قارن · اختر · احجز',
      sar: 'ر.س', km: 'كم', save: 'حفظ', cancel: 'إلغاء', close: 'إغلاق',
      copy: 'نسخ', copied: 'تم النسخ ✓', saved: 'تم الحفظ بنجاح',
      all: 'الكل', search: 'بحث...', actions: 'إجراءات', status: 'الحالة',
      week: 'أسبوع', month: 'شهر', year: 'سنة', today: 'اليوم',
      view: 'عرض', details: 'التفاصيل', back: 'رجوع',
      demo_only: 'ميزة تجريبية — للعرض فقط',
      notif_title: 'الإشعارات', notif_read_all: 'تحديد الكل كمقروء',
    },
    en: {
      logout: 'Logout', lang_ar: 'ع', lang_en: 'EN',
      login_title: 'Sign in', login_sub: 'Enter anything — this is a demo build',
      username: 'Username', password: 'Password',
      login_btn: 'Sign in', demo_btn: 'Quick demo login',
      demo_note: 'Investor demo — any username & password works, or use quick demo login.',
      tagline: 'Compare · Choose · Book',
      sar: 'SAR', km: 'km', save: 'Save', cancel: 'Cancel', close: 'Close',
      copy: 'Copy', copied: 'Copied ✓', saved: 'Saved successfully',
      all: 'All', search: 'Search...', actions: 'Actions', status: 'Status',
      week: 'Week', month: 'Month', year: 'Year', today: 'Today',
      view: 'View', details: 'Details', back: 'Back',
      demo_only: 'Demo feature — for display only',
      notif_title: 'Notifications', notif_read_all: 'Mark all read',
    },
  };

  let dict = COMMON_I18N;
  let lang = localStorage.getItem('al_lang') || 'ar';

  function mergeI18n(extra) {
    dict = {
      ar: { ...COMMON_I18N.ar, ...(extra.ar || {}) },
      en: { ...COMMON_I18N.en, ...(extra.en || {}) },
    };
  }

  const t = (key) => (dict[lang] && dict[lang][key]) ?? key;
  const L = (obj) => (typeof obj === 'object' && obj !== null ? obj[lang] ?? obj.ar : obj);

  function applyI18n(root = document) {
    root.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem('al_lang', lang);
    applyI18n();
    document.dispatchEvent(new CustomEvent('al:lang', { detail: lang }));
  }

  function bindLangToggle() {
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      b.addEventListener('click', () => setLang(b.dataset.lang));
    });
  }

  /* ---------- numbers ---------- */
  const nf = () => new Intl.NumberFormat(lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-US');
  const money = (v, digits = 0) => nf().format(Number(v).toFixed(digits));
  const sar = (v, digits = 0) => `${money(v, digits)} ${t('sar')}`;

  /* ---------- fake auth ---------- */
  function initLogin(portalKey) {
    const sessionKey = `al_session_${portalKey}`;
    const loginView = document.getElementById('login-view');
    const appView = document.getElementById('app-view');

    const enter = () => {
      localStorage.setItem(sessionKey, '1');
      loginView.classList.add('hidden');
      appView.classList.remove('hidden');
      document.dispatchEvent(new CustomEvent('al:entered'));
    };

    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      enter();
    });
    document.getElementById('demo-login').addEventListener('click', enter);
    document.querySelectorAll('.js-logout').forEach((b) =>
      b.addEventListener('click', () => {
        localStorage.removeItem(sessionKey);
        loginView.classList.remove('hidden');
        appView.classList.add('hidden');
      }));

    if (localStorage.getItem(sessionKey) === '1') {
      loginView.classList.add('hidden');
      appView.classList.remove('hidden');
      document.dispatchEvent(new CustomEvent('al:entered'));
    }
  }

  /* ---------- section switching ---------- */
  function initSections() {
    document.querySelectorAll('.nav-item[data-section]').forEach((btn) => {
      btn.addEventListener('click', () => showSection(btn.dataset.section));
    });
  }
  function showSection(id) {
    document.querySelectorAll('.section').forEach((s) => s.classList.toggle('active', s.id === `sec-${id}`));
    document.querySelectorAll('.nav-item[data-section]').forEach((b) =>
      b.classList.toggle('active', b.dataset.section === id));
    const active = document.querySelector(`.nav-item[data-section="${id}"] span[data-i18n]`);
    const title = document.getElementById('page-title');
    if (active && title) title.textContent = active.textContent;
    document.dispatchEvent(new CustomEvent('al:section', { detail: id }));
    window.scrollTo({ top: 0 });
  }

  /* ---------- toast ---------- */
  function toast(msg, type = 'success') {
    let root = document.getElementById('toast-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'toast-root';
      document.body.appendChild(root);
    }
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = msg;
    root.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2400);
    setTimeout(() => el.remove(), 2800);
  }

  /* ---------- modal ---------- */
  function openModal(id) { document.getElementById(id).classList.add('open'); }
  function closeModal(id) { document.getElementById(id).classList.remove('open'); }
  function bindModals() {
    document.querySelectorAll('.modal-back').forEach((m) => {
      m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('open'); });
      m.querySelectorAll('.js-close').forEach((x) =>
        x.addEventListener('click', () => m.classList.remove('open')));
    });
  }

  /* ---------- clipboard ---------- */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
    }
    toast(t('copied'));
  }

  /* ---------- tracking codes ---------- */
  function genCode() {
    const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
    const p = (n) => Array.from({ length: n }, () => A[Math.floor(Math.random() * A.length)]).join('');
    return `AL-${p(4)}-${p(4)}`;
  }

  /* ============================================================
     SVG charts — drawn by hand, RTL-aware labels
     ============================================================ */
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function svgEl(tag, attrs = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }

  /** Vertical bars, optional second series drawn as a line. */
  function barChart(el, { labels, series, lineSeries, height = 220, color = 'var(--gold)', lineColor = 'var(--navy)', format = money }) {
    el.innerHTML = '';
    const W = 620, H = height, padB = 26, padT = 14, padX = 30;
    const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, style: 'width:100%;height:auto;display:block' });
    const max = Math.max(...series, ...(lineSeries || [1])) * 1.15;
    const iw = (W - padX * 2) / labels.length;
    const bw = Math.min(30, iw * .5);

    for (let g = 0; g <= 3; g++) {
      const y = padT + (H - padB - padT) * (g / 3);
      svg.appendChild(svgEl('line', { x1: padX, x2: W - padX, y1: y, y2: y, stroke: 'var(--divider)', 'stroke-width': 1 }));
    }
    labels.forEach((lb, i) => {
      const v = series[i];
      const bh = (H - padB - padT) * (v / max);
      const x = padX + iw * i + (iw - bw) / 2;
      const bar = svgEl('rect', {
        x, y: H - padB - bh, width: bw, height: Math.max(bh, 2),
        rx: 6, fill: color, opacity: .92,
      });
      const title = svgEl('title'); title.textContent = `${lb}: ${format(v)}`;
      bar.appendChild(title);
      svg.appendChild(bar);
      const txt = svgEl('text', {
        x: x + bw / 2, y: H - 8, 'text-anchor': 'middle',
        'font-size': 10.5, fill: 'var(--text3)', 'font-weight': 600,
      });
      txt.textContent = lb;
      svg.appendChild(txt);
    });
    if (lineSeries) {
      const pts = lineSeries.map((v, i) => {
        const x = padX + iw * i + iw / 2;
        const y = H - padB - (H - padB - padT) * (v / max);
        return [x, y];
      });
      svg.appendChild(svgEl('polyline', {
        points: pts.map((p) => p.join(',')).join(' '),
        fill: 'none', stroke: lineColor, 'stroke-width': 2.5,
        'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      }));
      pts.forEach(([x, y], i) => {
        const c = svgEl('circle', { cx: x, cy: y, r: 3.6, fill: '#fff', stroke: lineColor, 'stroke-width': 2.2 });
        const title = svgEl('title'); title.textContent = `${labels[i]}: ${format(lineSeries[i])}`;
        c.appendChild(title);
        svg.appendChild(c);
      });
    }
    el.appendChild(svg);
  }

  /** Horizontal bars (e.g. bookings by city). */
  function hBarChart(el, { rows, color = 'var(--navy)', format = money }) {
    el.innerHTML = '';
    const max = Math.max(...rows.map((r) => r.value)) || 1;
    rows.forEach((r) => {
      const line = document.createElement('div');
      line.style.cssText = 'margin-bottom:10px';
      line.innerHTML = `
        <div style="display:flex;justify-content:space-between;font-size:.74rem;font-weight:700;margin-bottom:4px">
          <span>${L(r.label)}</span><span class="cell-num" style="color:var(--text2)">${format(r.value)}</span>
        </div>
        <div class="progressbar"><div style="width:${(r.value / max) * 100}%;background:${r.color || color}"></div></div>`;
      el.appendChild(line);
    });
  }

  /** Donut with center label + legend. */
  function donutChart(el, { slices, centerLabel = '', size = 180, thickness = 26 }) {
    el.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:center';
    const R = (size - thickness) / 2;
    const C = 2 * Math.PI * R;
    const svg = svgEl('svg', { viewBox: `0 0 ${size} ${size}`, style: `width:${size}px;height:${size}px;flex-shrink:0` });
    const total = slices.reduce((s, x) => s + x.value, 0) || 1;
    let acc = 0;
    slices.forEach((s) => {
      const frac = s.value / total;
      const circ = svgEl('circle', {
        cx: size / 2, cy: size / 2, r: R, fill: 'none',
        stroke: s.color, 'stroke-width': thickness,
        'stroke-dasharray': `${frac * C} ${C}`,
        'stroke-dashoffset': -acc * C,
        transform: `rotate(-90 ${size / 2} ${size / 2})`,
        'stroke-linecap': 'butt',
      });
      const title = svgEl('title'); title.textContent = `${L(s.label)}: ${Math.round(frac * 100)}%`;
      circ.appendChild(title);
      svg.appendChild(circ);
      acc += frac;
    });
    const center = svgEl('text', {
      x: size / 2, y: size / 2 + 5, 'text-anchor': 'middle',
      'font-size': 15, 'font-weight': 800, fill: 'var(--ink)',
    });
    center.textContent = centerLabel;
    svg.appendChild(center);
    wrap.appendChild(svg);

    const legend = document.createElement('div');
    legend.className = 'tooltip-legend';
    legend.style.cssText = 'flex-direction:column;gap:8px';
    slices.forEach((s) => {
      const li = document.createElement('div');
      li.className = 'li';
      li.innerHTML = `<span class="dot" style="background:${s.color}"></span>
        <span>${L(s.label)}</span>
        <b style="margin-inline-start:auto;direction:ltr">${Math.round((s.value / total) * 100)}%</b>`;
      legend.appendChild(li);
    });
    wrap.appendChild(legend);
    el.appendChild(wrap);
  }

  /** Area line chart with gradient fill. */
  function areaChart(el, { labels, series, height = 220, color = '#F0A62B', format = money }) {
    el.innerHTML = '';
    const W = 620, H = height, padB = 26, padT = 14, padX = 34;
    const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, style: 'width:100%;height:auto;display:block' });
    const max = Math.max(...series) * 1.12;
    const min = Math.min(...series) * .85;
    const iw = (W - padX * 2) / (labels.length - 1);
    const y = (v) => H - padB - (H - padB - padT) * ((v - min) / (max - min));

    for (let g = 0; g <= 3; g++) {
      const gy = padT + (H - padB - padT) * (g / 3);
      svg.appendChild(svgEl('line', { x1: padX, x2: W - padX, y1: gy, y2: gy, stroke: 'var(--divider)', 'stroke-width': 1 }));
    }
    const gid = `ag${Math.floor(performance.now() * 1000) % 1e9}`;
    const defs = svgEl('defs');
    const grad = svgEl('linearGradient', { id: gid, x1: 0, y1: 0, x2: 0, y2: 1 });
    grad.appendChild(svgEl('stop', { offset: '0%', 'stop-color': color, 'stop-opacity': .32 }));
    grad.appendChild(svgEl('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': .02 }));
    defs.appendChild(grad);
    svg.appendChild(defs);

    const pts = series.map((v, i) => [padX + iw * i, y(v)]);
    svg.appendChild(svgEl('polygon', {
      points: [[padX, H - padB], ...pts, [W - padX, H - padB]].map((p) => p.join(',')).join(' '),
      fill: `url(#${gid})`,
    }));
    svg.appendChild(svgEl('polyline', {
      points: pts.map((p) => p.join(',')).join(' '),
      fill: 'none', stroke: color, 'stroke-width': 2.6,
      'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }));
    pts.forEach(([px, py], i) => {
      const c = svgEl('circle', { cx: px, cy: py, r: 3.6, fill: '#fff', stroke: color, 'stroke-width': 2.2 });
      const title = svgEl('title'); title.textContent = `${labels[i]}: ${format(series[i])}`;
      c.appendChild(title);
      svg.appendChild(c);
      const tx = svgEl('text', { x: px, y: H - 8, 'text-anchor': 'middle', 'font-size': 10.5, fill: 'var(--text3)', 'font-weight': 600 });
      tx.textContent = labels[i];
      svg.appendChild(tx);
    });
    el.appendChild(svg);
  }

  /** Stacked vertical bars. stacks: [{label, color, values[]}] */
  function stackedBarChart(el, { labels, stacks, height = 230, format = money }) {
    el.innerHTML = '';
    const W = 620, H = height, padB = 26, padT = 12, padX = 30;
    const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, style: 'width:100%;height:auto;display:block' });
    const totals = labels.map((_, i) => stacks.reduce((s, st) => s + st.values[i], 0));
    const max = Math.max(...totals) * 1.1;
    const iw = (W - padX * 2) / labels.length;
    const bw = Math.min(30, iw * .52);
    for (let g = 0; g <= 3; g++) {
      const gy = padT + (H - padB - padT) * (g / 3);
      svg.appendChild(svgEl('line', { x1: padX, x2: W - padX, y1: gy, y2: gy, stroke: 'var(--divider)', 'stroke-width': 1 }));
    }
    labels.forEach((lb, i) => {
      const x = padX + iw * i + (iw - bw) / 2;
      let acc = 0;
      stacks.forEach((st) => {
        const v = st.values[i];
        const bh = (H - padB - padT) * (v / max);
        const rect = svgEl('rect', {
          x, y: H - padB - acc - bh, width: bw, height: Math.max(bh - 1, 1),
          rx: 2.5, fill: st.color,
        });
        const title = svgEl('title'); title.textContent = `${lb} — ${L(st.label)}: ${format(v)}`;
        rect.appendChild(title);
        svg.appendChild(rect);
        acc += bh;
      });
      const tx = svgEl('text', { x: x + bw / 2, y: H - 8, 'text-anchor': 'middle', 'font-size': 10.5, fill: 'var(--text3)', 'font-weight': 600 });
      tx.textContent = lb;
      svg.appendChild(tx);
    });
    el.appendChild(svg);
    const legend = document.createElement('div');
    legend.className = 'tooltip-legend';
    stacks.forEach((st) => {
      const li = document.createElement('span');
      li.className = 'li';
      li.innerHTML = `<span class="dot" style="background:${st.color}"></span>${L(st.label)}`;
      legend.appendChild(li);
    });
    el.appendChild(legend);
  }

  /** Semi-circle gauge (e.g. target attainment). */
  function gauge(el, { value, max: gmax, label = '', color = 'var(--gold)', size = 200 }) {
    el.innerHTML = '';
    const W = size, H = size * .62, r = size * .38, cx = W / 2, cy = H - 8;
    const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, style: `width:${size}px;max-width:100%;height:auto;display:block;margin:0 auto` });
    const semi = Math.PI * r;
    const frac = Math.min(value / gmax, 1);
    const arc = (col, dash, width, opacity = 1) => {
      const p = svgEl('path', {
        d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`,
        fill: 'none', stroke: col, 'stroke-width': width, 'stroke-linecap': 'round',
        'stroke-dasharray': `${dash} ${semi + 20}`, opacity,
      });
      svg.appendChild(p);
    };
    arc('var(--chip-bg)', semi, 15);
    arc(color, semi * frac, 15);
    const pct = svgEl('text', { x: cx, y: cy - 12, 'text-anchor': 'middle', 'font-size': size * .12, 'font-weight': 800, fill: 'var(--ink)' });
    pct.textContent = `${Math.round(frac * 100)}%`;
    svg.appendChild(pct);
    const lb = svgEl('text', { x: cx, y: cy + 4, 'text-anchor': 'middle', 'font-size': size * .052, 'font-weight': 600, fill: 'var(--text3)' });
    lb.textContent = label;
    svg.appendChild(lb);
    el.appendChild(svg);
  }

  /** Days × hours intensity heatmap (plain divs). */
  function heatmap(el, { days, hours, matrix, color = '11, 27, 51' }) {
    el.innerHTML = '';
    const max = Math.max(...matrix.flat()) || 1;
    const wrap = document.createElement('div');
    wrap.style.cssText = `display:grid;grid-template-columns:44px repeat(${hours.length},1fr);gap:3px;font-size:.6rem`;
    wrap.appendChild(document.createElement('div'));
    hours.forEach((h) => {
      const c = document.createElement('div');
      c.style.cssText = 'text-align:center;color:var(--text4);font-weight:700;direction:ltr';
      c.textContent = h;
      wrap.appendChild(c);
    });
    days.forEach((d, di) => {
      const lb = document.createElement('div');
      lb.style.cssText = 'color:var(--text3);font-weight:700;display:flex;align-items:center';
      lb.textContent = d;
      wrap.appendChild(lb);
      matrix[di].forEach((v, hi) => {
        const cell = document.createElement('div');
        const a = v / max;
        cell.style.cssText = `height:22px;border-radius:5px;background:rgba(${color},${(a * .92 + .04).toFixed(2)})`;
        cell.title = `${d} ${hours[hi]}: ${v}`;
        wrap.appendChild(cell);
      });
    });
    el.appendChild(wrap);
  }

  /** Horizontal funnel with conversion percentages. */
  function funnel(el, { steps }) {
    el.innerHTML = '';
    const max = steps[0]?.value || 1;
    steps.forEach((s, i) => {
      const pctOfFirst = Math.round((s.value / max) * 100);
      const conv = i === 0 ? '' : `${Math.round((s.value / steps[i - 1].value) * 100)}% ↩`;
      const row = document.createElement('div');
      row.style.cssText = 'margin-bottom:10px';
      row.innerHTML = `
        <div style="display:flex;justify-content:space-between;font-size:.73rem;font-weight:700;margin-bottom:4px">
          <span>${L(s.label)}</span>
          <span class="cell-num" style="color:var(--text2)">${money(s.value)} <span style="color:var(--text4);font-weight:600">${conv}</span></span>
        </div>
        <div class="progressbar" style="height:16px;border-radius:8px">
          <div style="width:${pctOfFirst}%;background:${s.color};border-radius:8px"></div>
        </div>`;
      el.appendChild(row);
    });
  }

  /** Offline CSV export (works from file://). */
  function exportCSV(filename, headers, rows) {
    const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = '﻿' + [headers, ...rows].map((r) => r.map(esc).join(',')).join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  /** Tiny sparkline bars for KPI cards. */
  function sparkBars(el, values, color = 'var(--gold)') {
    el.innerHTML = '';
    const W = 120, H = 38;
    const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, style: 'width:120px;height:38px' });
    const max = Math.max(...values) || 1;
    const bw = W / values.length - 3;
    values.forEach((v, i) => {
      const bh = Math.max((v / max) * (H - 4), 2);
      svg.appendChild(svgEl('rect', {
        x: i * (bw + 3), y: H - bh, width: bw, height: bh, rx: 2.5,
        fill: color, opacity: i === values.length - 1 ? 1 : .45,
      }));
    });
    el.appendChild(svg);
  }

  /* ---------- notification bell ---------- */
  let bellItems = [];
  function bell(items) {
    bellItems = items.map((x) => ({ ...x, unread: x.unread !== false }));
    const topbar = document.querySelector('.topbar');
    if (!topbar || document.querySelector('.bell-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = 'bell-wrap';
    wrap.innerHTML = `
      <button class="icon-btn bell-btn" id="bell-btn" title="">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>
        <span class="bell-badge" id="bell-badge"></span>
      </button>
      <div class="bell-panel" id="bell-panel"></div>`;
    const langToggle = topbar.querySelector('.lang-toggle');
    topbar.insertBefore(wrap, langToggle);
    document.getElementById('bell-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('bell-panel').classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) document.getElementById('bell-panel').classList.remove('open');
    });
    renderBell();
  }
  function renderBell() {
    const panel = document.getElementById('bell-panel');
    if (!panel) return;
    const unread = bellItems.filter((x) => x.unread).length;
    const badge = document.getElementById('bell-badge');
    badge.textContent = unread;
    badge.style.display = unread ? '' : 'none';
    panel.innerHTML = `
      <div class="bp-head"><span>${t('notif_title')}</span>
        <button id="bell-clear">${t('notif_read_all')}</button></div>
      ${bellItems.map((x) => `
        <div class="bell-item${x.unread ? ' unread' : ''}">
          <div class="bi-ic" style="background:${x.bg || 'var(--chip-bg)'}">${x.icon || '🔔'}</div>
          <div><div class="bi-title">${L(x.title)}</div><div class="bi-sub">${L(x.sub || '')}</div></div>
        </div>`).join('')}`;
    panel.querySelector('#bell-clear').addEventListener('click', () => {
      bellItems.forEach((x) => { x.unread = false; });
      renderBell();
    });
  }
  document.addEventListener('al:lang', () => renderBell());

  /* ---------- boot ---------- */
  function boot(portalI18n = {}) {
    mergeI18n(portalI18n);
    bindLangToggle();
    bindModals();
    initSections();
    applyI18n();
  }

  return {
    boot, t, L, get lang() { return lang; }, setLang, applyI18n,
    money, sar, toast, openModal, closeModal, copyText, genCode,
    initLogin, showSection, bell,
    barChart, hBarChart, donutChart, sparkBars,
    areaChart, stackedBarChart, gauge, heatmap, funnel, exportCSV,
  };
})();
