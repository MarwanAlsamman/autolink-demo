/* AutoLink — Admin Portal logic (demo, in-memory) */

const A = SEED.admin;
let period = 'month';

AL.boot({
  ar: {
    portal_name: 'بوابة الإدارة', admin_user: 'فريق AutoLink',
    topbar_sub: 'تقارير المنصة — جدة والرياض',
    nav_dashboard: 'لوحة التقارير', nav_tables: 'السجلات', nav_alerts: 'التنبيهات', nav_promos: 'العروض الترويجية',
    nav_providers: 'دليل المزودين', nav_finance: 'المالية والتسويات',
    dir_title: 'المزودون المسجلون', suspend: 'إيقاف', activate: 'تفعيل',
    suspended_msg: 'تم إيقاف المزود', activated_msg: 'تم تفعيل المزود ✓',
    nav_finreports: 'التقارير المالية', nav_customers: 'العملاء',
    cu_total: 'إجمالي العملاء', cu_vip: 'عملاء VIP', cu_vip_sub: 'إنفاق +5,000 ر.س',
    cu_ltv: 'متوسط قيمة العميل', cu_wallets: 'أرصدة المحافظ', cu_wallets_sub: 'كاش باك غير مستخدم',
    cu_title: 'قائمة العملاء', cu_hint: 'اضغط على عميل للتفاصيل — رتّب بالنقر على الأعمدة',
    cu_spend: 'إجمالي الإنفاق', cu_wallet: 'المحفظة', cu_last: 'آخر حجز',
    cu_joined: 'انضم في', cu_last_service: 'آخر خدمة', cu_block: 'حظر العميل', cu_unblock: 'رفع الحظر',
    cu_blocked_msg: 'تم حظر العميل', cu_unblocked_msg: 'تم رفع الحظر ✓',
    cu_active: 'نشط', cu_blocked: 'محظور', vip: 'VIP',
    fr_gmv: 'مبيعات الشهر GMV', fr_net: 'صافي ربح المنصة', fr_refunds: 'استردادات الشهر', fr_cashback: 'كاش باك وإحالات',
    fr_of_gmv: 'من المبيعات', fr_incl_ref: 'شامل مكافآت الإحالة',
    fr_gmv_trend: 'نمو المبيعات GMV', fr_target: 'تحقيق مستهدف الحجوزات',
    fr_comm_split: 'العمولات حسب الخدمة (شهرياً)', fr_pnl: 'ملخص الأرباح والخسائر — يوليو',
    pnl_gmv: 'إجمالي المبيعات', pnl_comm: 'عمولات المنصة (15%)', pnl_promo: 'تكلفة أكواد الخصم',
    pnl_cashback: 'كاش باك مدفوع', pnl_gateway: 'رسوم بوابة الدفع', pnl_net: 'صافي الربح',
    fr_refund_log: 'سجل الاستردادات', th_reason: 'السبب', export_csv: 'تصدير CSV', exported: 'تم تنزيل الملف ✓',
    st_paid: 'مدفوع', st_review: 'قيد المراجعة',
    f_holding: 'أرصدة محتجزة للمزودين', f_due: 'تسويات مستحقة', f_due_sub: 'مستحقة هذا الأسبوع',
    f_net: 'صافي عمولات الشهر', f_payouts: 'تسويات المزودين — يوليو 2026', f_payouts_hint: 'اعتمد الدفعات المعلقة',
    th_period: 'الفترة', th_gross: 'الإجمالي', th_net: 'الصافي', mark_paid: 'اعتماد الدفع',
    paid: 'مدفوعة', pending_pay: 'معلقة', paid_msg: 'تم اعتماد الدفعة ✓', this_month: 'هذا الشهر',
    k_bookings: 'حجوزات الشهر', k_bookings_w: 'حجوزات الأسبوع', k_bookings_y: 'حجوزات السنة',
    k_target: 'المستهدف', k_gmv: 'إجمالي المبيعات GMV', k_comm: 'عمولات المنصة (15%)',
    k_providers: 'مزودون نشطون', k_new_cust: 'عملاء جدد', k_avg: 'متوسط قيمة الحجز',
    chart_growth: 'نمو الحجوزات والعمولات', chart_growth_hint: 'آخر 8 أشهر',
    lg_bookings: 'الحجوزات', lg_commissions: 'العمولات (ر.س)',
    chart_services: 'الحجوزات حسب الخدمة', chart_cities: 'الحجوزات حسب المدينة',
    top_providers: 'أفضل المزودين', by_revenue: 'حسب الإيراد', th_provider: 'المزود', th_bookings: 'الحجوزات',
    th_revenue: 'الإيراد', th_rating: 'التقييم', th_customer: 'العميل', th_service: 'الخدمة', th_city: 'المدينة',
    th_amount: 'المبلغ', th_code: 'الرمز', th_commission: 'العمولة', th_type: 'النوع', th_ref: 'المرجع', th_usage: 'الاستخدام',
    latest_bookings: 'أحدث الحجوزات', voucher_log: 'سجل استخدام القسائم', tx_log: 'سجل المعاملات',
    st_confirmed: 'مؤكد', st_in_progress: 'قيد التنفيذ', st_completed: 'مكتمل', st_dispute: 'نزاع',
    st_redeemed: 'مستخدمة', st_pending: 'معلقة', st_expired: 'منتهية',
    pending_apps: 'طلبات انضمام مزودين', approve: 'اعتماد', reject: 'رفض',
    approved_msg: 'تم اعتماد المزود ✓', rejected_msg: 'تم رفض الطلب',
    open_disputes: 'نزاعات مفتوحة', resolve: 'معالجة',
    offplatform_title: 'محاولة تواصل خارج المنصة', offplatform_body: 'رصد النظام محاولة مزود مشاركة رقم واتساب مع عميل داخل المحادثة (حجز BK-90355). راجع الحالة لتطبيق سياسة المنصة.',
    review_case: 'مراجعة الحالة',
    promo_title: 'أكواد الخصم النشطة', promo_new: 'إنشاء كود خصم',
    pm_kind: 'نوع الخصم', pm_pct: 'نسبة مئوية %', pm_fixed: 'مبلغ ثابت (ر.س)', pm_value: 'القيمة', pm_cap: 'الحد الأقصى للاستخدام',
    pm_create: 'إنشاء الكود', pm_created: 'تم إنشاء الكود ✓', pm_exists: 'هذا الكود موجود مسبقاً',
    active: 'نشط', inactive: 'متوقف', disable: 'إيقاف', enable: 'تفعيل',
    cashback_title: 'إعدادات الكاش باك', cashback_pct: 'نسبة الكاش باك %', cashback_cap: 'حد أقصى للعملية (ر.س)',
    referral_title: 'إعدادات الإحالة', referral_bonus: 'مكافأة المُحيل (ر.س)', referral_friend: 'خصم الصديق (ر.س)',
    of_target: 'من المستهدف',
  },
  en: {
    portal_name: 'Admin Portal', admin_user: 'AutoLink Team',
    topbar_sub: 'Platform reports — Jeddah & Riyadh',
    nav_dashboard: 'Dashboard', nav_tables: 'Logs', nav_alerts: 'Alerts', nav_promos: 'Promotions',
    nav_providers: 'Providers Directory', nav_finance: 'Finance & Payouts',
    dir_title: 'Registered providers', suspend: 'Suspend', activate: 'Activate',
    suspended_msg: 'Provider suspended', activated_msg: 'Provider activated ✓',
    nav_finreports: 'Financial Reports', nav_customers: 'Customers',
    cu_total: 'Total customers', cu_vip: 'VIP customers', cu_vip_sub: 'spend over SAR 5,000',
    cu_ltv: 'Avg customer value', cu_wallets: 'Wallet balances', cu_wallets_sub: 'unused cashback',
    cu_title: 'Customer list', cu_hint: 'Click a customer for details — click columns to sort',
    cu_spend: 'Total spend', cu_wallet: 'Wallet', cu_last: 'Last booking',
    cu_joined: 'Joined', cu_last_service: 'Last service', cu_block: 'Block customer', cu_unblock: 'Unblock',
    cu_blocked_msg: 'Customer blocked', cu_unblocked_msg: 'Customer unblocked ✓',
    cu_active: 'Active', cu_blocked: 'Blocked', vip: 'VIP',
    fr_gmv: 'Month GMV', fr_net: 'Platform net profit', fr_refunds: 'Month refunds', fr_cashback: 'Cashback & referrals',
    fr_of_gmv: 'of GMV', fr_incl_ref: 'incl. referral bonuses',
    fr_gmv_trend: 'GMV growth', fr_target: 'Bookings target attainment',
    fr_comm_split: 'Commissions by service (monthly)', fr_pnl: 'P&L summary — July',
    pnl_gmv: 'Gross sales', pnl_comm: 'Platform commissions (15%)', pnl_promo: 'Promo codes cost',
    pnl_cashback: 'Cashback paid', pnl_gateway: 'Payment gateway fees', pnl_net: 'Net profit',
    fr_refund_log: 'Refunds log', th_reason: 'Reason', export_csv: 'Export CSV', exported: 'File downloaded ✓',
    st_paid: 'Paid', st_review: 'In review',
    f_holding: 'Held provider balances', f_due: 'Payouts due', f_due_sub: 'due this week',
    f_net: 'Net commissions this month', f_payouts: 'Provider payouts — Jul 2026', f_payouts_hint: 'Approve pending payouts',
    th_period: 'Period', th_gross: 'Gross', th_net: 'Net', mark_paid: 'Mark paid',
    paid: 'Paid', pending_pay: 'Pending', paid_msg: 'Payout approved ✓', this_month: 'this month',
    k_bookings: 'Monthly bookings', k_bookings_w: 'Weekly bookings', k_bookings_y: 'Yearly bookings',
    k_target: 'Target', k_gmv: 'Gross sales GMV', k_comm: 'Platform commissions (15%)',
    k_providers: 'Active providers', k_new_cust: 'New customers', k_avg: 'Avg booking value',
    chart_growth: 'Bookings & commissions growth', chart_growth_hint: 'Last 8 months',
    lg_bookings: 'Bookings', lg_commissions: 'Commissions (SAR)',
    chart_services: 'Bookings by service', chart_cities: 'Bookings by city',
    top_providers: 'Top providers', by_revenue: 'by revenue', th_provider: 'Provider', th_bookings: 'Bookings',
    th_revenue: 'Revenue', th_rating: 'Rating', th_customer: 'Customer', th_service: 'Service', th_city: 'City',
    th_amount: 'Amount', th_code: 'Code', th_commission: 'Commission', th_type: 'Type', th_ref: 'Ref', th_usage: 'Usage',
    latest_bookings: 'Latest bookings', voucher_log: 'Voucher redemption log', tx_log: 'Transactions log',
    st_confirmed: 'Confirmed', st_in_progress: 'In progress', st_completed: 'Completed', st_dispute: 'Dispute',
    st_redeemed: 'Redeemed', st_pending: 'Pending', st_expired: 'Expired',
    pending_apps: 'Provider applications', approve: 'Approve', reject: 'Reject',
    approved_msg: 'Provider approved ✓', rejected_msg: 'Application rejected',
    open_disputes: 'Open disputes', resolve: 'Resolve',
    offplatform_title: 'Off-platform contact attempt', offplatform_body: 'The system flagged a provider sharing a WhatsApp number in chat (booking BK-90355). Review the case to apply platform policy.',
    review_case: 'Review case',
    promo_title: 'Active promo codes', promo_new: 'Create promo code',
    pm_kind: 'Discount type', pm_pct: 'Percentage %', pm_fixed: 'Fixed amount (SAR)', pm_value: 'Value', pm_cap: 'Usage cap',
    pm_create: 'Create code', pm_created: 'Promo code created ✓', pm_exists: 'This code already exists',
    active: 'Active', inactive: 'Inactive', disable: 'Disable', enable: 'Enable',
    cashback_title: 'Cashback settings', cashback_pct: 'Cashback %', cashback_cap: 'Per-order cap (SAR)',
    referral_title: 'Referral settings', referral_bonus: 'Referrer bonus (SAR)', referral_friend: 'Friend discount (SAR)',
    of_target: 'of target',
  },
});

AL.initLogin('admin');
AL.bell([
  { icon: '🏬', bg: 'var(--blue-bg)', title: { ar: 'طلب انضمام جديد: درع الخليج PPF', en: 'New application: Gulf Shield PPF' }, sub: { ar: 'قبل 12 دقيقة', en: '12 min ago' } },
  { icon: '⚖️', bg: 'var(--red-bg)', title: { ar: 'نزاع جديد على الحجز BK-90408', en: 'New dispute on booking BK-90408' }, sub: { ar: 'قبل ساعة', en: '1 hour ago' } },
  { icon: '⚠️', bg: 'var(--cream)', title: { ar: 'محاولة تواصل خارج المنصة', en: 'Off-platform contact attempt' }, sub: { ar: 'قبل 3 ساعات', en: '3 hours ago' } },
  { icon: '🎯', bg: 'var(--green-bg)', title: { ar: 'تم تجاوز مستهدف الحجوزات الشهري 🎉', en: 'Monthly bookings target exceeded 🎉' }, sub: { ar: 'أمس', en: 'Yesterday' }, unread: false },
]);

const $ = (s, r = document) => r.querySelector(s);
const t = AL.t, L = AL.L;

const ST_CHIP = {
  confirmed: 'blue', in_progress: 'gold', completed: 'green', dispute: 'red',
  redeemed: 'green', pending: 'gold', expired: 'gray',
};

/* ---------- KPI cards ---------- */
function kpiCard({ icon, iconBg, label, value, delta, extra }) {
  return `
    <div class="card kpi">
      <div class="k-label"><span class="k-icon" style="background:${iconBg}">${icon}</span><span>${label}</span></div>
      <div class="k-value">${value}</div>
      <div class="k-delta ${delta >= 0 ? 'up' : 'down'}">${delta >= 0 ? '▲' : '▼'} ${Math.abs(delta)}% ${extra || ''}</div>
    </div>`;
}

function renderKpis() {
  const k = A.kpis[period];
  const bookLabel = period === 'week' ? t('k_bookings_w') : period === 'year' ? t('k_bookings_y') : t('k_bookings');
  const pct = Math.round((k.bookings / k.target) * 100);
  $('#kpi-grid').innerHTML = [
    kpiCard({
      icon: '📅', iconBg: 'var(--blue-bg)', label: bookLabel,
      value: AL.money(k.bookings), delta: k.deltas.bookings,
      extra: `<span class="muted">· ${pct}% ${t('of_target')} ${AL.money(k.target)}</span>`,
    }),
    kpiCard({ icon: '🛒', iconBg: 'var(--cream)', label: t('k_gmv'), value: `${AL.money(k.gmv)} <span class="unit">${t('sar')}</span>`, delta: k.deltas.gmv }),
    kpiCard({ icon: '🏦', iconBg: 'var(--green-bg)', label: t('k_comm'), value: `${AL.money(k.commissions)} <span class="unit">${t('sar')}</span>`, delta: k.deltas.commissions }),
    kpiCard({ icon: '🏬', iconBg: 'var(--purple-bg)', label: t('k_providers'), value: AL.money(k.providers), delta: k.deltas.providers }),
    kpiCard({ icon: '👤', iconBg: 'var(--blue-bg)', label: t('k_new_cust'), value: AL.money(k.newCustomers), delta: k.deltas.newCustomers }),
    kpiCard({ icon: '💳', iconBg: 'var(--cream)', label: t('k_avg'), value: `${AL.money(k.avgBooking)} <span class="unit">${t('sar')}</span>`, delta: k.deltas.avgBooking }),
  ].join('');
}

/* ---------- charts ---------- */
function renderCharts() {
  const months = SEED.months[AL.lang];
  AL.barChart($('#growth-chart'), {
    labels: months,
    series: A.monthlyBookings,
    lineSeries: A.monthlyCommissions.map((v) => v / 120), // scale to same axis
    height: 240,
    format: AL.money,
  });
  AL.donutChart($('#service-donut'), {
    slices: A.byService.map((s) => ({
      label: SEED.services[s.key], value: s.value, color: SEED.services[s.key].color,
    })),
    centerLabel: AL.money(A.kpis[period].bookings),
    size: 160, thickness: 24,
  });
  AL.hBarChart($('#city-bars'), { rows: A.byCity, format: AL.money });
}

/* ---------- tables ---------- */
function renderTopProviders() {
  const tb = $('#top-providers tbody');
  tb.innerHTML = '';
  A.topProviders.forEach((p, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><div class="row-flex"><span class="mini-logo">${p.logo}</span>
        <div><div class="cell-strong">${L(p.name)}</div><div class="cell-muted">#${i + 1}</div></div></div></td>
      <td class="cell-num">${AL.money(p.bookings)}</td>
      <td class="cell-num cell-strong">${AL.sar(p.revenue)}</td>
      <td><span style="color:var(--gold);font-weight:800">★ ${p.rating}</span></td>
      <td><div class="progressbar" style="width:90px"><div style="width:${(p.revenue / A.topProviders[0].revenue) * 100}%"></div></div></td>`;
    tb.appendChild(tr);
  });
}

function renderLogs() {
  const bt = $('#bookings-table tbody');
  bt.innerHTML = '';
  A.latestBookings.forEach((b) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-muted">${b.id}</td>
      <td class="cell-strong">${L(b.customer)}</td>
      <td><span class="chip gray">${L(SEED.services[b.service])}</span></td>
      <td>${L(b.provider)}</td>
      <td>${L(SEED.cities[b.city])}</td>
      <td class="cell-num">${AL.sar(b.amount)}</td>
      <td><span class="chip ${ST_CHIP[b.status]}">${t('st_' + b.status)}</span></td>`;
    bt.appendChild(tr);
  });

  const vt = $('#voucher-table tbody');
  vt.innerHTML = '';
  A.voucherLog.forEach((v) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-strong">${v.code}</td>
      <td>${L(v.provider)}</td>
      <td class="cell-num">${AL.sar(v.amount)}</td>
      <td class="cell-num" style="color:var(--green)">${AL.sar(v.commission, 2)}</td>
      <td><span class="chip ${ST_CHIP[v.status]}">${t('st_' + v.status)}</span></td>`;
    vt.appendChild(tr);
  });

  const xt = $('#tx-table tbody');
  xt.innerHTML = '';
  A.transactions.forEach((x) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-muted">${x.id}</td>
      <td>${L(x.type)}</td>
      <td class="cell-num cell-muted">${x.ref}</td>
      <td class="cell-num" style="color:${x.dir === 'in' ? 'var(--green)' : 'var(--red)'};font-weight:800">
        ${x.dir === 'in' ? '+' : '−'} ${AL.sar(x.amount)}</td>`;
    xt.appendChild(tr);
  });
}

/* ---------- alerts ---------- */
function renderAlerts() {
  const al = $('#apps-list');
  al.innerHTML = '';
  A.applications.forEach((app, i) => {
    const row = document.createElement('div');
    row.className = 'alert-row';
    row.id = `app-row-${i}`;
    row.innerHTML = `
      <div class="alert-ic" style="background:var(--blue-bg)">🏬</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:.84rem">${L(app.name)}</div>
        <div class="small muted">${L(SEED.cities[app.city])} · ${L(SEED.services[app.service])} · <span class="cell-num">${app.date}</span></div>
      </div>
      <button class="btn success sm" onclick="appAction(${i}, true)">${t('approve')}</button>
      <button class="btn danger sm" onclick="appAction(${i}, false)">${t('reject')}</button>`;
    al.appendChild(row);
  });

  const dl = $('#disputes-list');
  dl.innerHTML = '';
  A.disputes.forEach((d) => {
    const row = document.createElement('div');
    row.className = 'alert-row';
    row.innerHTML = `
      <div class="alert-ic" style="background:var(--red-bg)">⚖️</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:.84rem">${d.id} · ${L(d.customer)}</div>
        <div class="small muted">${L(d.reason)} — <span class="cell-num">${d.booking}</span></div>
      </div>
      <button class="btn outline sm" onclick="AL.toast(AL.t('demo_only'))">${t('resolve')}</button>`;
    dl.appendChild(row);
  });

  updateAlertsBadge();
}

function updateAlertsBadge() {
  const n = A.applications.length + A.disputes.length + 1; // +1 off-platform warning
  const b = $('#alerts-badge');
  b.textContent = n;
  b.style.display = n ? '' : 'none';
}

window.appAction = (i, approve) => {
  const row = document.getElementById(`app-row-${i}`);
  row.style.opacity = '.45';
  row.querySelectorAll('button').forEach((b) => b.remove());
  const chip = document.createElement('span');
  chip.className = `chip ${approve ? 'green' : 'red'}`;
  chip.textContent = approve ? t('approved_msg') : t('rejected_msg');
  row.appendChild(chip);
  if (approve) { A.kpis[period].providers += 1; renderKpis(); }
  A.applications[i]._done = true;
  AL.toast(approve ? t('approved_msg') : t('rejected_msg'), approve ? 'success' : 'error');
};

/* ---------- promos ---------- */
function renderPromos() {
  const tb = $('#promo-table tbody');
  tb.innerHTML = '';
  A.promos.forEach((p, i) => {
    const pct = Math.min(100, Math.round((p.uses / p.cap) * 100));
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-strong">${p.code}</td>
      <td>${L(p.type)}</td>
      <td style="min-width:140px">
        <div class="small cell-num">${AL.money(p.uses)} / ${AL.money(p.cap)}</div>
        <div class="progressbar mt-2" style="height:5px"><div style="width:${pct}%"></div></div>
      </td>
      <td><span class="chip ${p.active ? 'green' : 'gray'}">${t(p.active ? 'active' : 'inactive')}</span></td>
      <td><button class="btn outline sm" onclick="togglePromo(${i})">${t(p.active ? 'disable' : 'enable')}</button></td>`;
    tb.appendChild(tr);
  });
}
window.togglePromo = (i) => { A.promos[i].active = !A.promos[i].active; renderPromos(); };

$('#new-promo-btn').addEventListener('click', () => AL.openModal('promo-modal'));
$('#pm-create').addEventListener('click', () => {
  const code = $('#pm-code').value.trim().toUpperCase();
  if (!code) return;
  if (A.promos.some((p) => p.code === code)) { AL.toast(t('pm_exists'), 'error'); return; }
  const kind = $('#pm-kind').value;
  const val = Number($('#pm-value').value) || 0;
  A.promos.unshift({
    code,
    type: kind === 'pct'
      ? { ar: `خصم ${val}%`, en: `${val}% off` }
      : { ar: `خصم ${val} ر.س`, en: `SAR ${val} off` },
    uses: 0, cap: Number($('#pm-cap').value) || 1000, active: true,
  });
  AL.closeModal('promo-modal');
  $('#pm-code').value = '';
  renderPromos();
  AL.toast(t('pm_created'));
});

/* ---------- customers ---------- */
let cuFilter = '';
let cuSort = { key: null, dir: -1 };

function renderCustomers() {
  if (!$('#cu-table')) return;
  const C = A.customers;
  $('#cu-total').textContent = AL.money(A.kpis.month.newCustomers * 8);
  $('#cu-vip').textContent = AL.money(C.filter((c) => c.vip).length * 214);
  $('#cu-ltv').innerHTML = `${AL.money(C.reduce((s, c) => s + c.spend, 0) / C.length)} <span class="unit">${t('sar')}</span>`;
  $('#cu-wallets').innerHTML = `${AL.money(C.reduce((s, c) => s + c.wallet, 0) * 180)} <span class="unit">${t('sar')}</span>`;

  let rows = C.filter((c) => !cuFilter
    || L(c.name).toLowerCase().includes(cuFilter)
    || c.phone.includes(cuFilter));
  if (cuSort.key) {
    rows = [...rows].sort((a, b) => {
      const va = a[cuSort.key], vb = b[cuSort.key];
      return (va > vb ? 1 : va < vb ? -1 : 0) * cuSort.dir;
    });
  }

  const tb = $('#cu-table tbody');
  tb.innerHTML = '';
  rows.forEach((c) => {
    const i = C.indexOf(c);
    const tr = document.createElement('tr');
    tr.className = 'clickable';
    tr.addEventListener('click', () => openCustomer(i));
    tr.innerHTML = `
      <td><div class="row-flex">
        <div class="staff-avatar" style="width:32px;height:32px;font-size:.72rem">${L(c.name).slice(0, 1)}</div>
        <div><div class="cell-strong">${L(c.name)} ${c.vip ? `<span class="chip gold" style="font-size:.58rem;padding:1px 7px">${t('vip')}</span>` : ''}</div>
        <div class="cell-muted cell-num" style="direction:ltr;text-align:end">${c.phone}</div></div></div></td>
      <td>${L(SEED.cities[c.city])}</td>
      <td class="cell-num">${AL.money(c.bookings)}</td>
      <td class="cell-num cell-strong">${AL.sar(c.spend)}</td>
      <td class="cell-num">${AL.sar(c.wallet)}</td>
      <td class="cell-num cell-muted">${c.last}</td>
      <td><span class="chip ${c.active ? 'green' : 'red'}">${t(c.active ? 'cu_active' : 'cu_blocked')}</span></td>`;
    tb.appendChild(tr);
  });

  document.querySelectorAll('#cu-table th.sortable').forEach((th) => {
    th.querySelector('.sort-ic').textContent =
      cuSort.key === th.dataset.sort ? (cuSort.dir === 1 ? '↑' : '↓') : '↕';
  });
}

function openCustomer(i) {
  const c = A.customers[i];
  $('#cu-modal-body').innerHTML = `
    <h3>
      <div class="staff-avatar" style="width:38px;height:38px">${L(c.name).slice(0, 1)}</div>
      ${L(c.name)}
      ${c.vip ? `<span class="chip gold">${t('vip')}</span>` : ''}
      <button class="x js-close" onclick="AL.closeModal('cu-modal')">✕</button></h3>
    <div class="kv"><span class="k">${t('th_customer')}</span><span class="v cell-num" style="direction:ltr">${c.phone}</span></div>
    <div class="kv"><span class="k">${t('th_city')}</span><span class="v">${L(SEED.cities[c.city])}</span></div>
    <div class="kv"><span class="k">${t('cu_joined')}</span><span class="v cell-num">${c.joined}</span></div>
    <div class="kv"><span class="k">${t('th_bookings')}</span><span class="v cell-num">${AL.money(c.bookings)}</span></div>
    <div class="kv"><span class="k">${t('cu_spend')}</span><span class="v cell-num" style="color:var(--green)">${AL.sar(c.spend)}</span></div>
    <div class="kv"><span class="k">${t('cu_wallet')}</span><span class="v cell-num">${AL.sar(c.wallet)}</span></div>
    <div class="kv"><span class="k">${t('cu_last_service')}</span><span class="v">${L(SEED.services[c.lastService])} · <span class="cell-num">${c.last}</span></span></div>
    <button class="btn ${c.active ? 'danger' : 'success'} block mt-4" onclick="cuToggle(${i})">
      ${t(c.active ? 'cu_block' : 'cu_unblock')}</button>`;
  AL.openModal('cu-modal');
}
window.cuToggle = (i) => {
  const c = A.customers[i];
  c.active = !c.active;
  AL.closeModal('cu-modal');
  renderCustomers();
  AL.toast(t(c.active ? 'cu_unblocked_msg' : 'cu_blocked_msg'), c.active ? 'success' : 'error');
};
$('#cu-search').addEventListener('input', (e) => { cuFilter = e.target.value.trim().toLowerCase(); renderCustomers(); });
document.querySelectorAll('#cu-table th.sortable').forEach((th) => {
  th.addEventListener('click', () => {
    const key = th.dataset.sort;
    cuSort = { key, dir: cuSort.key === key ? -cuSort.dir : -1 };
    renderCustomers();
  });
});
$('#cu-export').addEventListener('click', () => {
  AL.exportCSV('autolink-customers.csv',
    ['Name', 'Phone', 'City', 'Bookings', 'Spend SAR', 'Wallet SAR', 'Last booking', 'Status'],
    A.customers.map((c) => [L(c.name), c.phone, L(SEED.cities[c.city]), c.bookings, c.spend, c.wallet, c.last, c.active ? 'active' : 'blocked']));
  AL.toast(t('exported'));
});

/* ---------- providers directory ---------- */
let dirFilter = '';
function renderDirectory() {
  const tb = $('#dir-table tbody');
  tb.innerHTML = '';
  A.directory
    .filter((p) => !dirFilter || L(p.name).toLowerCase().includes(dirFilter) || p.logo.toLowerCase().includes(dirFilter))
    .forEach((p) => {
      const i = A.directory.indexOf(p);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><div class="row-flex"><span class="mini-logo">${p.logo}</span><span class="cell-strong">${L(p.name)}</span></div></td>
        <td>${L(SEED.cities[p.city])}</td>
        <td><span class="chip gray">${L(SEED.services[p.service])}</span></td>
        <td class="cell-num">${AL.money(p.bookings)}</td>
        <td><span style="color:var(--gold);font-weight:800">★ ${p.rating}</span></td>
        <td><span class="chip ${p.active ? 'green' : 'red'}">${t(p.active ? 'active' : 'inactive')}</span></td>
        <td><button class="btn ${p.active ? 'danger' : 'success'} sm" onclick="dirToggle(${i})">${t(p.active ? 'suspend' : 'activate')}</button></td>`;
      tb.appendChild(tr);
    });
}
window.dirToggle = (i) => {
  A.directory[i].active = !A.directory[i].active;
  renderDirectory();
  AL.toast(t(A.directory[i].active ? 'activated_msg' : 'suspended_msg'), A.directory[i].active ? 'success' : 'error');
};
$('#dir-search').addEventListener('input', (e) => { dirFilter = e.target.value.trim().toLowerCase(); renderDirectory(); });

/* ---------- finance ---------- */
function renderFinance() {
  const due = A.payouts.filter((p) => !p.paid).reduce((s, p) => s + p.net, 0);
  const held = due + 168400;
  $('#f-holding').innerHTML = `${AL.money(held)} <span class="unit" style="color:rgba(255,255,255,.6)">${t('sar')}</span>`;
  $('#f-due').innerHTML = `${AL.money(due)} <span class="unit">${t('sar')}</span>`;
  $('#f-net').innerHTML = `${AL.money(A.kpis.month.commissions)} <span class="unit">${t('sar')}</span>`;
  const tb = $('#payout-table tbody');
  tb.innerHTML = '';
  A.payouts.forEach((p, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-strong">${L(p.provider)}</td>
      <td class="cell-muted">${L(p.period)}</td>
      <td class="cell-num">${AL.sar(p.gross)}</td>
      <td class="cell-num" style="color:var(--green)">${AL.sar(p.commission)}</td>
      <td class="cell-num cell-strong">${AL.sar(p.net)}</td>
      <td><span class="chip ${p.paid ? 'green' : 'gold'}">${t(p.paid ? 'paid' : 'pending_pay')}</span></td>
      <td>${p.paid ? '' : `<button class="btn navy sm" onclick="markPaid(${i})">${t('mark_paid')}</button>`}</td>`;
    tb.appendChild(tr);
  });
}
window.markPaid = (i) => { A.payouts[i].paid = true; renderFinance(); AL.toast(t('paid_msg')); };

/* ---------- financial reports ---------- */
function renderFinReports() {
  const F = A.finance;
  const months = SEED.months[AL.lang];
  const refundsTotal = F.refunds.reduce((s, r) => s + r.amount, 0);
  const net = F.pnl.find((p) => p.key === 'pnl_net').value;

  $('#fr-gmv').innerHTML = `${AL.money(A.kpis.month.gmv)} <span class="unit">${t('sar')}</span>`;
  $('#fr-net').innerHTML = `${AL.money(net)} <span class="unit">${t('sar')}</span>`;
  $('#fr-refunds').innerHTML = `${AL.money(refundsTotal)} <span class="unit">${t('sar')}</span>`;
  $('#fr-cashback').innerHTML = `${AL.money(F.cashbackMonth + F.referralMonth)} <span class="unit">${t('sar')}</span>`;

  AL.areaChart($('#fr-gmv-chart'), { labels: months, series: F.gmvTrend, height: 230, format: (v) => AL.sar(v) });
  AL.gauge($('#fr-gauge'), {
    value: A.kpis.month.bookings, max: A.kpis.month.target,
    label: `${AL.money(A.kpis.month.bookings)} / ${AL.money(A.kpis.month.target)}`, size: 210,
  });
  $('#fr-t-book').textContent = AL.money(A.kpis.month.bookings);
  $('#fr-t-target').textContent = AL.money(A.kpis.month.target);

  AL.stackedBarChart($('#fr-stacked'), {
    labels: months,
    stacks: Object.entries(F.commByService).map(([key, values]) => ({
      label: SEED.services[key], color: SEED.services[key].color, values,
    })),
    height: 240, format: (v) => AL.sar(v),
  });

  const pnl = $('#fr-pnl');
  pnl.innerHTML = '';
  F.pnl.forEach((row) => {
    const div = document.createElement('div');
    div.className = 'kv';
    if (row.key === 'pnl_net') div.style.cssText = 'border-top:2px solid var(--navy);border-bottom:none;margin-top:4px;padding-top:10px';
    div.innerHTML = `
      <span class="k" style="${row.key === 'pnl_net' ? 'font-weight:800;color:var(--ink)' : ''}">${t(row.key)}</span>
      <span class="v cell-num" style="color:${row.dir === 'out' ? 'var(--red)' : row.dir === 'net' ? 'var(--gold-text)' : 'var(--green)'};${row.key === 'pnl_net' ? 'font-size:.95rem' : ''}">
        ${row.value < 0 ? '−' : ''} ${AL.sar(Math.abs(row.value))}</span>`;
    pnl.appendChild(div);
  });

  const tb = $('#refund-table tbody');
  tb.innerHTML = '';
  F.refunds.forEach((r) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-muted">${r.id}</td>
      <td class="cell-num cell-muted">${r.booking}</td>
      <td class="cell-strong">${L(r.customer)}</td>
      <td class="cell-muted">${L(r.reason)}</td>
      <td class="cell-num" style="color:var(--red)">− ${AL.sar(r.amount)}</td>
      <td><span class="chip ${r.status === 'paid' ? 'green' : 'gold'}">${t('st_' + r.status)}</span></td>`;
    tb.appendChild(tr);
  });
}
$('#fr-export').addEventListener('click', () => {
  AL.exportCSV('autolink-refunds.csv',
    ['ID', 'Booking', 'Customer', 'Reason', 'Amount SAR', 'Status'],
    A.finance.refunds.map((r) => [r.id, r.booking, L(r.customer), L(r.reason), r.amount, r.status]));
  AL.toast(t('exported'));
});

/* ---------- period switcher ---------- */
document.querySelectorAll('#period-seg button').forEach((b) => {
  b.addEventListener('click', () => {
    period = b.dataset.period;
    document.querySelectorAll('#period-seg button').forEach((x) => x.classList.toggle('active', x === b));
    renderKpis();
    renderCharts();
  });
});

/* ---------- select options i18n (modal) ---------- */
function localizeSelects() {
  document.querySelectorAll('select option[data-i18n]').forEach((o) => { o.textContent = t(o.dataset.i18n); });
}

/* ---------- boot ---------- */
function renderAll() {
  renderKpis(); renderCharts(); renderTopProviders(); renderLogs(); renderAlerts(); renderPromos();
  renderDirectory(); renderFinance(); renderFinReports(); renderCustomers(); localizeSelects();
}
document.addEventListener('al:lang', renderAll);
document.addEventListener('al:entered', renderAll);
renderAll();
