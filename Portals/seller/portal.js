/* LINKAR — Outsource Seller Portal logic (demo, in-memory) */

const S = SEED.seller;

AL.boot({
  ar: {
    portal_name: 'بوابة مندوب المبيعات',
    rep_name: 'أحمد محمد', rep_agency: 'وكالة الجبر للسيارات',
    nav_home: 'الرئيسية', nav_newlead: 'عميل جديد', nav_leads: 'عملائي', nav_mycode: 'رمزي الخاص', nav_commissions: 'العمولات',
    nav_prices: 'قائمة الأسعار', nav_leaderboard: 'لوحة المتصدرين', nav_goals: 'أهدافي وعمولاتي',
    g_title: 'هدف مبيعات أغسطس', g_remaining: 'باقي {n} مبيعات للمكافأة التالية 🎯',
    g_funnel: 'قمع التحويل — من التسجيل إلى البيع', g_cum: 'العمولات الشهرية (ر.س)',
    g_bank: 'حساب استلام العمولات', g_bank_name: 'البنك', g_holder: 'اسم صاحب الحساب', g_edit_bank: 'تعديل الحساب',
    g_tier_at: 'عند {n} مبيعة', g_bonus: 'مكافأة',
    export_csv: 'تصدير CSV', exported: 'تم تنزيل الملف ✓',
    pl_title: 'أسعار الخدمات وعمولتك', pl_hint: 'استخدمها لتسعير العرض للعميل',
    th_service_cat: 'الخدمة', th_package: 'الباقة', th_from: 'يبدأ من', th_your_comm: 'عمولتك',
    lb_title: 'متصدرو المندوبين — يوليو 2026', lb_hint: 'ترتيبك بين مندوبي الوكالات',
    lb_sales: 'مبيعات', lb_you: 'أنت',
    welcome: 'أهلاً', welcome_sub: 'سجّل عملاءك المهتمين وتابع مبيعاتك وعمولاتك من مكان واحد.',
    cta_newlead: '＋ تسجيل عميل جديد',
    w_total: 'إجمالي العمولات', w_avail: 'الرصيد المتاح',
    s_sold: 'مبيعات مكتملة', s_followup: 'قيد المتابعة', s_customers: 'إجمالي العملاء',
    this_month: 'هذا الشهر', in_pipeline: 'لدى فريق المبيعات',
    chart_comm: 'العمولات الشهرية (ر.س)', chart_services: 'المبيعات حسب الخدمة',
    nl_title: 'تسجيل عميل مهتم', nl_hint: 'يُرسل لفريق مبيعات لينكار',
    nl_owner: '👤 بيانات مالك السيارة', nl_car: '🚗 بيانات السيارة', nl_services: '⭐ الخدمات المطلوبة',
    f_name: 'الاسم الكامل', f_phone: 'رقم الجوال', f_email: 'البريد الإلكتروني', f_city: 'المدينة',
    city_jeddah: 'جدة', city_riyadh: 'الرياض',
    f_make: 'الشركة المصنعة', f_model: 'الموديل', f_year: 'سنة الصنع', f_color: 'اللون', f_plate: 'رقم اللوحة',
    f_notes: 'ملاحظات', f_files: 'صور السيارة (اختياري)',
    dz_text: 'اضغط لاختيار صور أو ملفات', nl_submit: 'إرسال لفريق المبيعات',
    need_fields: 'فضلاً أدخل الاسم ورقم الجوال واختر خدمة واحدة على الأقل',
    ok_title: 'تم إرسال العميل بنجاح!', ok_sub: 'وصل الطلب لفريق مبيعات لينكار وسيتم التواصل مع العميل خلال ساعات العمل. تتبع الحالة من "عملائي".',
    ok_goleads: 'عرض عملائي', ok_again: 'تسجيل عميل آخر',
    ml_title: 'عملائي', ml_hint: 'اضغط على أي صف لعرض التفاصيل',
    th_customer: 'العميل', th_car: 'السيارة', th_services: 'الخدمات', th_date: 'التاريخ', th_code: 'رمز التتبع',
    th_desc: 'الوصف', th_lead: 'العميل',
    st_new: 'جديد', st_sent: 'أُرسل لفريق المبيعات', st_contacted: 'تم التواصل', st_sold: 'تم البيع ✓', st_lost: 'لم يكتمل',
    commission_earned: 'عمولة مكتسبة',
    tl_created: 'تسجيل العميل', tl_sent: 'إرسال للفريق', tl_contacted: 'تواصل فريق المبيعات', tl_result: 'النتيجة',
    mc_title: 'رمز الإحالة الخاص بك', mc_sub: 'شارك هذا الرمز أو الـ QR مع عملائك — أي حجز عبره يُحسب لك تلقائياً.',
    mc_copy: 'نسخ الرمز',
    withdraw: 'سحب الرصيد', withdraw_ok: 'تم استلام طلب السحب (تجريبي) ✓',
    c_history: 'سجل العمولات والمعاملات',
  },
  en: {
    portal_name: 'Outsource Seller Portal',
    rep_name: 'Ahmed Mohammed', rep_agency: 'Aljabr Motors',
    nav_home: 'Home', nav_newlead: 'New Lead', nav_leads: 'My Leads', nav_mycode: 'My Code', nav_commissions: 'Commissions',
    nav_prices: 'Price List', nav_leaderboard: 'Leaderboard', nav_goals: 'Goals & Payouts',
    g_title: 'August sales target', g_remaining: '{n} more sales to the next bonus 🎯',
    g_funnel: 'Conversion funnel — lead to sale', g_cum: 'Monthly commissions (SAR)',
    g_bank: 'Commission payout account', g_bank_name: 'Bank', g_holder: 'Account holder', g_edit_bank: 'Edit account',
    g_tier_at: 'at {n} sales', g_bonus: 'Bonus',
    export_csv: 'Export CSV', exported: 'File downloaded ✓',
    pl_title: 'Service prices & your commission', pl_hint: 'Use it to quote customers',
    th_service_cat: 'Service', th_package: 'Package', th_from: 'From', th_your_comm: 'Your commission',
    lb_title: 'Top reps — Jul 2026', lb_hint: 'Your rank among dealership reps',
    lb_sales: 'sales', lb_you: 'You',
    welcome: 'Welcome', welcome_sub: 'Register interested customers and track your sales & commissions in one place.',
    cta_newlead: '＋ Register new lead',
    w_total: 'Total commissions', w_avail: 'Available balance',
    s_sold: 'Sales completed', s_followup: 'In follow-up', s_customers: 'Total customers',
    this_month: 'this month', in_pipeline: 'with the sales team',
    chart_comm: 'Monthly commissions (SAR)', chart_services: 'Sales by service',
    nl_title: 'Register interested customer', nl_hint: 'Sent to the LINKAR sales team',
    nl_owner: '👤 Car owner info', nl_car: '🚗 Car info', nl_services: '⭐ Interested services',
    f_name: 'Full name', f_phone: 'Phone number', f_email: 'Email', f_city: 'City',
    city_jeddah: 'Jeddah', city_riyadh: 'Riyadh',
    f_make: 'Make', f_model: 'Model', f_year: 'Year', f_color: 'Color', f_plate: 'Plate number',
    f_notes: 'Notes', f_files: 'Car photos (optional)',
    dz_text: 'Click to choose photos or files', nl_submit: 'Send to sales team',
    need_fields: 'Please enter name, phone, and at least one service',
    ok_title: 'Lead sent successfully!', ok_sub: 'The LINKAR sales team received it and will contact the customer during working hours. Track it under "My Leads".',
    ok_goleads: 'View my leads', ok_again: 'Register another',
    ml_title: 'My Leads', ml_hint: 'Click any row for details',
    th_customer: 'Customer', th_car: 'Car', th_services: 'Services', th_date: 'Date', th_code: 'Tracking code',
    th_desc: 'Description', th_lead: 'Lead',
    st_new: 'New', st_sent: 'Sent to sales team', st_contacted: 'Contacted', st_sold: 'Sold ✓', st_lost: 'Lost',
    commission_earned: 'Commission earned',
    tl_created: 'Lead registered', tl_sent: 'Sent to team', tl_contacted: 'Sales team contact', tl_result: 'Outcome',
    mc_title: 'Your referral code', mc_sub: 'Share this code or QR with customers — any booking through it is credited to you automatically.',
    mc_copy: 'Copy code',
    withdraw: 'Withdraw', withdraw_ok: 'Withdrawal requested (demo) ✓',
    c_history: 'Commissions & transactions',
  },
});

AL.initLogin('seller');
AL.bell([
  { icon: '💰', bg: 'var(--green-bg)', title: { ar: 'تم البيع! عمولة 610 ر.س من راكان الحقيل', en: 'Sold! SAR 610 commission from Rakan' }, sub: { ar: 'قبل 20 دقيقة', en: '20 min ago' } },
  { icon: '📞', bg: 'var(--blue-bg)', title: { ar: 'فريق المبيعات تواصل مع ماجد الروقي', en: 'Sales team contacted Majed Alruwaili' }, sub: { ar: 'قبل ساعتين', en: '2 hours ago' } },
  { icon: '🎯', bg: 'var(--cream)', title: { ar: 'باقي 14 مبيعة لمكافأة 1,500 ر.س', en: '14 sales left to the SAR 1,500 bonus' }, sub: { ar: 'اليوم', en: 'Today' }, unread: false },
]);

const $ = (s, r = document) => r.querySelector(s);
const t = AL.t, L = AL.L;

const LEAD_CHIP = { new: 'gray', sent: 'blue', contacted: 'gold', sold: 'green', lost: 'red' };

/* ---------- home ---------- */
function renderHome() {
  $('#w-total').innerHTML = `${AL.money(S.wallet.total, 2)} <span class="unit" style="color:rgba(255,255,255,.6)">${t('sar')}</span>`;
  $('#w-avail').textContent = `${t('w_avail')}: ${AL.sar(S.wallet.available, 2)}`;
  $('#s-sold').textContent = AL.money(S.stats.sold);
  $('#s-follow').textContent = AL.money(S.stats.followup);
  $('#s-cust').textContent = AL.money(S.stats.customers);

  AL.barChart($('#comm-chart'), {
    labels: SEED.months[AL.lang], series: S.monthlyCommissions, height: 210,
    format: (v) => AL.sar(v),
  });
  AL.donutChart($('#service-donut'), {
    slices: S.byService.map((s) => ({ label: SEED.services[s.key], value: s.value, color: SEED.services[s.key].color })),
    centerLabel: AL.money(S.stats.sold),
    size: 150, thickness: 22,
  });
}

/* ---------- new lead form ---------- */
const picked = new Set();
let pickedFiles = [];

function renderServiceChips() {
  const box = $('#f-services');
  box.innerHTML = '';
  Object.entries(SEED.services).forEach(([key, s]) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `check-chip${picked.has(key) ? ' on' : ''}`;
    b.textContent = L(s);
    b.addEventListener('click', () => {
      picked.has(key) ? picked.delete(key) : picked.add(key);
      renderServiceChips();
    });
    box.appendChild(b);
  });
}

function renderMakes() {
  const sel = $('#f-make');
  sel.innerHTML = S.carMakes.map((m) => `<option>${m}</option>`).join('');
  sel.value = 'Lexus';
}

$('#dropzone').addEventListener('click', () => $('#dz-input').click());
$('#dz-input').addEventListener('change', (e) => {
  pickedFiles = [...e.target.files].map((f) => f.name);
  $('#dz-files').textContent = pickedFiles.join(' · ');
});

$('#lead-submit').addEventListener('click', () => {
  const name = $('#f-name').value.trim();
  const phone = $('#f-phone').value.trim();
  if (!name || !phone || picked.size === 0) { AL.toast(t('need_fields'), 'error'); return; }
  const code = AL.genCode();
  S.leads.unshift({
    code,
    name: { ar: name, en: name },
    phone,
    city: $('#f-city').value,
    car: `${$('#f-make').value} ${$('#f-model').value.trim()} ${$('#f-year').value}`.replace(/\s+/g, ' ').trim(),
    services: [...picked],
    status: 'sent',
    commission: null,
    date: '2026-08-03',
    notes: $('#f-notes').value.trim(),
    files: pickedFiles,
  });
  S.stats.customers += 1;
  S.stats.followup += 1;
  $('#ok-code').textContent = code;
  $('#lead-form-wrap').classList.add('hidden');
  $('#lead-success').classList.remove('hidden');
  renderLeads();
  renderHome();
});

$('#ok-copy').addEventListener('click', () => AL.copyText($('#ok-code').textContent));
$('#ok-again').addEventListener('click', () => {
  ['f-name', 'f-phone', 'f-email', 'f-model', 'f-color', 'f-plate', 'f-notes'].forEach((id) => { $('#' + id).value = ''; });
  picked.clear(); pickedFiles = []; $('#dz-files').textContent = '';
  renderServiceChips();
  $('#lead-success').classList.add('hidden');
  $('#lead-form-wrap').classList.remove('hidden');
});

/* ---------- my leads ---------- */
function renderLeads() {
  const tb = $('#leads-table tbody');
  tb.innerHTML = '';
  S.leads.forEach((ld, i) => {
    const tr = document.createElement('tr');
    tr.className = 'clickable';
    tr.addEventListener('click', () => openLead(i));
    tr.innerHTML = `
      <td class="cell-num cell-strong">${ld.code}</td>
      <td class="cell-strong">${L(ld.name)}</td>
      <td class="cell-muted" style="direction:ltr">${ld.car}</td>
      <td>${ld.services.map((k) => `<span class="chip gray" style="margin-inline-end:3px">${L(SEED.services[k])}</span>`).join('')}</td>
      <td class="cell-num cell-muted">${ld.date}</td>
      <td><span class="chip ${LEAD_CHIP[ld.status]}">${t('st_' + ld.status)}</span>
        ${ld.commission ? `<div class="small cell-num" style="color:var(--green);font-weight:800">+ ${AL.sar(ld.commission)}</div>` : ''}</td>`;
    tb.appendChild(tr);
  });
  const followCount = S.leads.filter((l) => ['new', 'sent', 'contacted'].includes(l.status)).length;
  const b = $('#leads-badge');
  b.textContent = followCount;
  b.style.display = followCount ? '' : 'none';
}

const STAGE_ORDER = { new: 0, sent: 1, contacted: 2, sold: 3, lost: 3 };

function openLead(i) {
  const ld = S.leads[i];
  const stage = STAGE_ORDER[ld.status];
  const tlItem = (idx, title, sub) => {
    const cls = stage > idx ? 'done' : stage === idx ? 'now' : '';
    return `<div class="t-item ${cls}"><div class="t-title">${title}</div><div class="t-sub">${sub || ''}</div></div>`;
  };
  $('#lead-modal-body').innerHTML = `
    <h3><span class="cell-num">${ld.code}</span>
      <span class="chip ${LEAD_CHIP[ld.status]}" style="margin-inline-start:8px">${t('st_' + ld.status)}</span>
      <button class="x js-close" onclick="AL.closeModal('lead-modal')">✕</button></h3>
    <div class="kv"><span class="k">${t('th_customer')}</span><span class="v">${L(ld.name)} · <span class="cell-num">${ld.phone || ''}</span></span></div>
    <div class="kv"><span class="k">${t('th_car')}</span><span class="v" style="direction:ltr">${ld.car}</span></div>
    <div class="kv"><span class="k">${t('f_city')}</span><span class="v">${L(SEED.cities[ld.city])}</span></div>
    <div class="kv"><span class="k">${t('th_services')}</span><span class="v">${ld.services.map((k) => L(SEED.services[k])).join(' · ')}</span></div>
    ${ld.commission ? `<div class="kv"><span class="k">${t('commission_earned')}</span><span class="v cell-num" style="color:var(--green)">+ ${AL.sar(ld.commission)}</span></div>` : ''}
    <div class="divider-h"></div>
    <div class="timeline mt-2">
      ${tlItem(0, t('tl_created'), ld.date)}
      ${tlItem(1, t('tl_sent'), 'LINKAR Sales')}
      ${tlItem(2, t('tl_contacted'), ld.status === 'contacted' || stage > 2 ? '✓' : '…')}
      ${tlItem(3, t('tl_result'), ld.status === 'sold' ? t('st_sold') : ld.status === 'lost' ? t('st_lost') : '…')}
    </div>`;
  AL.openModal('lead-modal');
}

/* ---------- my code ---------- */
$('#mc-copy').addEventListener('click', () => AL.copyText(S.rep.code));

/* ---------- commissions ---------- */
function renderCommissions() {
  $('#c-total').innerHTML = `${AL.money(S.wallet.total, 2)} <span class="unit" style="color:rgba(255,255,255,.6)">${t('sar')}</span>`;
  $('#c-avail').innerHTML = `${AL.money(S.wallet.available, 2)} <span class="unit">${t('sar')}</span>`;
  const tb = $('#comm-table tbody');
  tb.innerHTML = '';
  S.commissions.forEach((c) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-muted">${c.id}</td>
      <td>${L(c.desc)}</td>
      <td class="cell-num cell-muted">${c.lead}</td>
      <td class="cell-num cell-muted">${c.date}</td>
      <td class="cell-num" style="color:${c.dir === 'in' ? 'var(--green)' : 'var(--red)'};font-weight:800">
        ${c.dir === 'in' ? '+' : '−'} ${AL.sar(c.amount)}</td>`;
    tb.appendChild(tr);
  });
}
$('#c-withdraw').addEventListener('click', () => AL.toast(t('withdraw_ok')));
$('#c-export').addEventListener('click', () => {
  AL.exportCSV('ahmed-commissions.csv',
    ['ID', 'Description', 'Lead', 'Date', 'Amount SAR', 'Direction'],
    S.commissions.map((c) => [c.id, L(c.desc), c.lead, c.date, c.amount, c.dir]));
  AL.toast(t('exported'));
});

/* ---------- goals, funnel, bank ---------- */
function renderGoals() {
  const G = SEED.seller.goals;
  if (!$('#g-gauge')) return;
  AL.gauge($('#g-gauge'), {
    value: G.salesNow, max: G.salesTarget,
    label: `${AL.money(G.salesNow)} / ${AL.money(G.salesTarget)}`,
    color: 'var(--green)', size: 210,
  });
  const nextTier = G.tiers.find((tr) => tr.at > G.salesNow);
  $('#g-remaining').textContent = nextTier
    ? t('g_remaining').replace('{n}', AL.money(nextTier.at - G.salesNow))
    : '🏆';
  const tiers = $('#g-tiers');
  tiers.innerHTML = '';
  G.tiers.forEach((tr) => {
    const hit = G.salesNow >= tr.at;
    const d = document.createElement('div');
    d.className = 'stat-pill';
    if (hit) d.style.cssText = 'background:var(--green-bg);border-color:#CBE9D8';
    d.innerHTML = `
      <div class="v" style="${hit ? 'color:var(--green)' : ''}">${hit ? '✓ ' : ''}${AL.sar(tr.bonus)}</div>
      <div class="l">${t('g_tier_at').replace('{n}', AL.money(tr.at))}</div>`;
    tiers.appendChild(d);
  });
  AL.funnel($('#g-funnel'), { steps: G.funnel });
  AL.areaChart($('#g-cum-chart'), {
    labels: SEED.months[AL.lang], series: S.monthlyCommissions, height: 215,
    color: '#1E7AE0', format: (v) => AL.sar(v),
  });
  $('#g-bank-name').textContent = L(SEED.seller.bank.name);
  $('#g-iban').textContent = SEED.seller.bank.iban;
  $('#g-holder').textContent = L(SEED.seller.bank.holder);
}
$('#g-copy-iban').addEventListener('click', () => AL.copyText(SEED.seller.bank.iban));

/* ---------- price list ---------- */
function renderPrices() {
  const tb = $('#price-table tbody');
  tb.innerHTML = '';
  SEED.seller.priceList.forEach((p) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="chip gray">${L(SEED.services[p.service])}</span></td>
      <td class="cell-strong">${L(p.name)}</td>
      <td class="cell-num">${AL.sar(p.from)}</td>
      <td class="cell-num" style="color:var(--green);font-weight:800">${L(p.comm)}</td>`;
    tb.appendChild(tr);
  });
}

/* ---------- leaderboard ---------- */
function renderLeaderboard() {
  const root = $('#lb-list');
  root.innerHTML = '';
  const medals = ['🥇', '🥈', '🥉'];
  SEED.seller.leaderboard.forEach((r, i) => {
    const row = document.createElement('div');
    row.className = 'staff-row';
    if (r.me) row.style.cssText = 'background:var(--cream);border-radius:12px;padding-inline:12px;border:1px solid var(--cream-border)';
    row.innerHTML = `
      <div style="width:34px;text-align:center;font-size:${i < 3 ? '1.3rem' : '.85rem'};font-weight:800;color:var(--text3)">${medals[i] || i + 1}</div>
      <div class="staff-avatar">${L(r.name).slice(0, 1)}</div>
      <div style="flex:1;min-width:140px">
        <div style="font-weight:700;font-size:.85rem">${L(r.name)} ${r.me ? `<span class="chip lime">${t('lb_you')}</span>` : ''}</div>
        <div class="small muted">${L(r.agency)}</div>
      </div>
      <div class="stat-pill" style="min-width:80px"><div class="v">${r.sales}</div><div class="l">${t('lb_sales')}</div></div>
      <div class="cell-num" style="font-weight:800;color:var(--green);min-width:110px;text-align:end">${AL.sar(r.comm, 2)}</div>`;
    root.appendChild(row);
  });
}

/* ---------- select options i18n ---------- */
function localizeSelects() {
  document.querySelectorAll('select option[data-i18n]').forEach((o) => { o.textContent = t(o.dataset.i18n); });
}

/* ---------- boot ---------- */
function renderAll() {
  renderHome(); renderServiceChips(); renderMakes(); renderLeads(); renderCommissions();
  renderGoals(); renderPrices(); renderLeaderboard(); localizeSelects();
}
document.addEventListener('al:lang', renderAll);
document.addEventListener('al:entered', renderAll);
renderAll();
