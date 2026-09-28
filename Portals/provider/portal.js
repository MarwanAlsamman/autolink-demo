/* LINKAR — Service Provider Portal logic (demo, in-memory)
   Star flows: voucher validation and reservation start — both gated by a
   client OTP confirmation (demo code 0000, same as the mobile app). */

const P = SEED.provider;
const OTP_CODE = '0000';

AL.boot({
  ar: {
    portal_name: 'بوابة مزود الخدمة',
    provider_name: 'مركز النخبة للتظليل', verified: 'موثق', city_jeddah: 'جدة',
    nav_overview: 'نظرة عامة', nav_vouchers: 'التحقق من القسائم', nav_reservations: 'الحجوزات',
    nav_earnings: 'الأرباح', nav_branches: 'الفروع والخدمات', nav_reviews: 'التقييمات',
    nav_staff: 'الفنيون', nav_offers: 'عروضي', nav_analytics: 'التحليلات المالية',
    an_net_trend: 'صافي الإيراد الشهري', an_8m: 'آخر 8 أشهر', an_by_pkg: 'الإيراد حسب الباقة',
    an_heat: 'أكثر الساعات ازدحاماً', an_heat_hint: 'عدد الحجوزات لكل ساعة × يوم',
    an_payouts: 'سجل التسويات من لينكار', th_period: 'الفترة',
    st_processing: 'قيد التحويل', paid: 'مدفوعة', export_csv: 'تصدير CSV', exported: 'تم تنزيل الملف ✓',
    k_today: 'حجوزات اليوم', k_month_rev: 'إيراد الشهر (صافي)', k_rating: 'متوسط التقييم', k_pending_v: 'قسائم بانتظار التحقق',
    vs_yesterday: 'عن الأمس', after_commission: 'بعد عمولة 15%', awaiting_validation: 'بانتظار وصول العملاء',
    week_chart: 'حجوزات الأسبوع', quick_validate: 'تحقق من قسيمة الآن', quick_validate_sub: 'أدخل الرمز المرجعي أو امسح رمز QR من جوال العميل',
    go_validate: 'فتح شاشة التحقق',
    v_title: 'التحقق من قسيمة الحجز', v_sub: 'أدخل الرمز المرجعي المعروض في تطبيق العميل',
    v_check: 'تحقق', v_scan: 'مسح رمز QR', v_try: 'جرّب: AL-8X7K-92Q1 (صالح) · AL-USED-0001 (مستخدم) · AL-EXP-0001 (منتهي)',
    v_valid: 'قسيمة صالحة ✓', v_used: 'قسيمة مستخدمة مسبقاً', v_expired: 'قسيمة منتهية الصلاحية', v_notfound: 'لم يتم العثور على القسيمة',
    v_notfound_sub: 'تأكد من الرمز أو اطلب من العميل إظهار القسيمة من تطبيق لينكار.',
    v_customer: 'العميل', v_phone: 'الجوال', v_car: 'السيارة', v_service: 'الخدمة', v_branch: 'الفرع',
    v_amount: 'المبلغ المدفوع', v_payout: 'مستحقك (بعد 15%)', v_expiry: 'صالحة حتى', v_used_at: 'استُخدمت في',
    otp_send: 'إرسال رمز تحقق للعميل', otp_sent: 'أُرسل رمز التحقق لجوال العميل ✓',
    otp_title: 'أدخل الرمز الذي وصل للعميل', otp_hint: '(تجريبي: الرمز 0000)',
    otp_confirm: 'تأكيد الرمز', otp_wrong: 'الرمز غير صحيح — جرّب 0000', otp_ok: 'تم تأكيد هوية العميل ✓',
    otp_resend: 'إعادة إرسال',
    otp_complete_send: 'إرسال رمز إنهاء الخدمة للعميل', otp_complete_title: 'أدخل رمز إنهاء الخدمة الذي وصل للعميل',
    v_start: 'بدء الخدمة', v_complete: 'إنهاء الخدمة ✓', v_started: 'الخدمة قيد التنفيذ…', v_completed_msg: 'تم إنهاء الخدمة وإضافة المستحق إلى رصيدك ✓',
    scan_title: 'مسح رمز QR', scan_placeholder: 'الكاميرا غير متاحة في نسخة العرض', scan_simulate: 'محاكاة مسح ناجح',
    res_title: 'حجوزات اليوم والقادمة', res_hint: 'اقبل أو ارفض الحجوزات الجديدة',
    res_click_hint: 'اضغط على أي حجز لبدء الخدمة بتحقق OTP',
    view_list: 'قائمة', view_cal: 'تقويم أسبوعي', cal_title: 'تقويم الأسبوع', cal_hint: 'اضغط على أي موعد لفتحه',
    th_time: 'الوقت', th_customer: 'العميل', th_service: 'الخدمة', th_branch: 'الفرع', th_amount: 'المبلغ',
    st_new: 'جديد', st_confirmed: 'مؤكد', st_awaiting: 'بانتظار الوصول', st_in_progress: 'قيد التنفيذ', st_completed: 'مكتمل', st_dispute: 'نزاع',
    accept: 'قبول', decline: 'رفض', accepted: 'تم قبول الحجز ✓', declined: 'تم رفض الحجز',
    res_flow_title: 'تفاصيل الحجز',
    e_balance: 'رصيد المستحقات', e_withdraw: 'طلب سحب', e_pending: 'قيد التسوية', e_pending_sub: 'تُسوى خلال 3 أيام عمل',
    e_commission: 'عمولة المنصة', e_commission_sub: 'تُخصم تلقائياً من كل حجز',
    e_breakdown: 'تفاصيل العمولات لكل حجز', th_booking: 'الحجز', th_date: 'التاريخ', th_gross: 'الإجمالي', th_commission: 'العمولة (15%)', th_net: 'الصافي',
    withdraw_ok: 'تم استلام طلب السحب — سيصل خلال 3 أيام عمل (تجريبي)',
    b_title: 'الفروع وساعات العمل', p_title: 'الباقات والأسعار', p_hint: 'عدّل السعر ثم احفظ',
    bays: 'مسارات خدمة', price_saved: 'تم تحديث السعر ✓',
    reply_ph: 'اكتب ردك على العميل…', reply_btn: 'إرسال الرد', replied: 'تم نشر الرد ✓', your_reply: 'ردّك',
    staff_title: 'فريق الفنيين', staff_hint: 'الإشغال اليوم لكل فني',
    jobs_today: 'مهام اليوم', utilization: 'الإشغال',
    offers_title: 'عروضي الترويجية', offer_new: 'إضافة عرض', offer_name: 'اسم العرض',
    offer_discount: 'نسبة الخصم %', offer_until: 'ساري حتى', offer_create: 'نشر العرض',
    offer_created: 'تم نشر العرض ✓', offer_uses: 'استخدام', active: 'نشط', inactive: 'منتهي',
    disable: 'إيقاف', enable: 'تفعيل',
    days: 'سبت,أحد,اثنين,ثلاثاء,أربعاء,خميس,جمعة',
  },
  en: {
    portal_name: 'Service Provider Portal',
    provider_name: 'Elite Tinting Center', verified: 'Verified', city_jeddah: 'Jeddah',
    nav_overview: 'Overview', nav_vouchers: 'Voucher Validation', nav_reservations: 'Reservations',
    nav_earnings: 'Earnings', nav_branches: 'Branches & Services', nav_reviews: 'Reviews',
    nav_staff: 'Technicians', nav_offers: 'My Offers', nav_analytics: 'Financial Analytics',
    an_net_trend: 'Monthly net revenue', an_8m: 'Last 8 months', an_by_pkg: 'Revenue by package',
    an_heat: 'Busiest hours', an_heat_hint: 'Bookings per hour × day',
    an_payouts: 'LINKAR payout history', th_period: 'Period',
    st_processing: 'Processing', paid: 'Paid', export_csv: 'Export CSV', exported: 'File downloaded ✓',
    k_today: "Today's bookings", k_month_rev: 'Month revenue (net)', k_rating: 'Average rating', k_pending_v: 'Vouchers pending',
    vs_yesterday: 'vs yesterday', after_commission: 'after 15% commission', awaiting_validation: 'customers on the way',
    week_chart: 'This week bookings', quick_validate: 'Validate a voucher now', quick_validate_sub: "Enter the reference code or scan the QR from the customer's phone",
    go_validate: 'Open validation screen',
    v_title: 'Validate booking voucher', v_sub: "Enter the reference code shown in the customer's app",
    v_check: 'Check', v_scan: 'Scan QR code', v_try: 'Try: AL-8X7K-92Q1 (valid) · AL-USED-0001 (used) · AL-EXP-0001 (expired)',
    v_valid: 'Valid voucher ✓', v_used: 'Voucher already used', v_expired: 'Voucher expired', v_notfound: 'Voucher not found',
    v_notfound_sub: 'Check the code or ask the customer to open the voucher in the LINKAR app.',
    v_customer: 'Customer', v_phone: 'Phone', v_car: 'Car', v_service: 'Service', v_branch: 'Branch',
    v_amount: 'Amount paid', v_payout: 'Your payout (after 15%)', v_expiry: 'Valid until', v_used_at: 'Used at',
    otp_send: 'Send OTP to customer', otp_sent: "OTP sent to the customer's phone ✓",
    otp_title: 'Enter the code the customer received', otp_hint: '(demo: the code is 0000)',
    otp_confirm: 'Confirm code', otp_wrong: 'Wrong code — try 0000', otp_ok: 'Customer identity confirmed ✓',
    otp_resend: 'Resend',
    otp_complete_send: 'Send completion OTP to customer', otp_complete_title: 'Enter the completion code the customer received',
    v_start: 'Start service', v_complete: 'Complete service ✓', v_started: 'Service in progress…', v_completed_msg: 'Service completed — payout added to your balance ✓',
    scan_title: 'Scan QR code', scan_placeholder: 'Camera unavailable in demo build', scan_simulate: 'Simulate successful scan',
    res_title: "Today's & upcoming reservations", res_hint: 'Accept or decline new bookings',
    res_click_hint: 'Click any booking to start service with OTP verification',
    view_list: 'List', view_cal: 'Week calendar', cal_title: 'Week calendar', cal_hint: 'Click any appointment to open it',
    th_time: 'Time', th_customer: 'Customer', th_service: 'Service', th_branch: 'Branch', th_amount: 'Amount',
    st_new: 'New', st_confirmed: 'Confirmed', st_awaiting: 'Awaiting arrival', st_in_progress: 'In progress', st_completed: 'Completed', st_dispute: 'Dispute',
    accept: 'Accept', decline: 'Decline', accepted: 'Booking accepted ✓', declined: 'Booking declined',
    res_flow_title: 'Booking details',
    e_balance: 'Payout balance', e_withdraw: 'Request withdrawal', e_pending: 'Being settled', e_pending_sub: 'Settles within 3 business days',
    e_commission: 'Platform commission', e_commission_sub: 'Auto-deducted from every booking',
    e_breakdown: 'Commission breakdown per booking', th_booking: 'Booking', th_date: 'Date', th_gross: 'Gross', th_commission: 'Commission (15%)', th_net: 'Net',
    withdraw_ok: 'Withdrawal requested — arrives within 3 business days (demo)',
    b_title: 'Branches & working hours', p_title: 'Packages & prices', p_hint: 'Edit a price, then save',
    bays: 'service bays', price_saved: 'Price updated ✓',
    reply_ph: 'Write your reply to the customer…', reply_btn: 'Send reply', replied: 'Reply published ✓', your_reply: 'Your reply',
    staff_title: 'Technician team', staff_hint: "Today's load per technician",
    jobs_today: 'jobs today', utilization: 'Utilization',
    offers_title: 'My promotional offers', offer_new: 'Add offer', offer_name: 'Offer name',
    offer_discount: 'Discount %', offer_until: 'Valid until', offer_create: 'Publish offer',
    offer_created: 'Offer published ✓', offer_uses: 'uses', active: 'Active', inactive: 'Ended',
    disable: 'Disable', enable: 'Enable',
    days: 'Sat,Sun,Mon,Tue,Wed,Thu,Fri',
  },
});

AL.initLogin('provider');
AL.bell([
  { icon: '📅', bg: 'var(--blue-bg)', title: { ar: 'حجز جديد: أحمد الزهراني — 11:15', en: 'New booking: Ahmed Alzahrani — 11:15' }, sub: { ar: 'قبل 9 دقائق', en: '9 min ago' } },
  { icon: '🎫', bg: 'var(--cream)', title: { ar: '6 قسائم بانتظار وصول العملاء اليوم', en: '6 vouchers awaiting customers today' }, sub: { ar: 'قبل ساعة', en: '1 hour ago' } },
  { icon: '⭐', bg: 'var(--green-bg)', title: { ar: 'تقييم جديد 5★ من محمد ع.', en: 'New 5★ review from Mohammed A.' }, sub: { ar: 'أمس', en: 'Yesterday' }, unread: false },
]);

const $ = (s, r = document) => r.querySelector(s);
const t = AL.t, L = AL.L;

const STATUS_CHIP = {
  new: 'lime', confirmed: 'blue', awaiting: 'purple',
  in_progress: 'gold', completed: 'green', dispute: 'red',
};
const CAL_COLORS = {
  new:         { bg: '#F3FFE0', border: '#8FE000' },
  confirmed:   { bg: '#EDF3FC', border: '#1E7AE0' },
  awaiting:    { bg: '#F3EDFC', border: '#7B4FD1' },
  in_progress: { bg: '#FFF5E0', border: '#E8A317' },
  completed:   { bg: '#EAF6EF', border: '#1E9E5A' },
  dispute:     { bg: '#FDECEC', border: '#D64545' },
};

/* ============================================================
   Shared OTP-gated service flow.
   session = { customer, phone?, car?, service, branch?, amount, payout?,
               status/_stage, onDone } — renders staged controls into a host.
   Stages: ready → otp → verified → started → done
   ============================================================ */
function otpBlock(ns, title) {
  return `
    <div style="text-align:center">
      <div style="font-weight:700;font-size:.82rem">${title}</div>
      <div class="muted small">${t('otp_hint')}</div>
      <div class="flex mt-2" style="justify-content:center;gap:8px">
        <input class="otp-input" id="otp-in" maxlength="4" placeholder="••••" inputmode="numeric">
      </div>
      <div class="flex mt-2" style="justify-content:center;gap:8px">
        <button class="btn gold" onclick="${ns}.confirmOtp()">${t('otp_confirm')}</button>
        <button class="btn outline sm" onclick="${ns}.resendOtp()">↻ ${t('otp_resend')}</button>
      </div>
    </div>`;
}

function flowControls(stage, ns) {
  if (stage === 'ready') {
    return `<button class="btn navy block" onclick="${ns}.sendOtp()">📲 ${t('otp_send')}</button>`;
  }
  if (stage === 'otp') return otpBlock(ns, t('otp_title'));
  if (stage === 'verified') {
    return `
      <div style="text-align:center">
        <span class="chip green">✓ ${t('otp_ok')}</span>
        <button class="btn navy block mt-2" onclick="${ns}.start()">▶ ${t('v_start')}</button>
      </div>`;
  }
  if (stage === 'started') {
    return `
      <div class="flex" style="gap:8px">
        <span class="chip gold">⏳ ${t('v_started')}</span>
        <button class="btn success" style="flex:1" onclick="${ns}.requestComplete()">📲 ${t('otp_complete_send')}</button>
      </div>`;
  }
  if (stage === 'otp2') return otpBlock(ns, t('otp_complete_title'));
  return `<span class="chip green" style="font-size:.8rem;padding:8px 16px">✓ ${t('v_completed_msg')}</span>`;
}

/* ---------- overview ---------- */
function renderOverview() {
  $('#k-today').textContent = AL.money(P.todayBookings);
  $('#k-rev').innerHTML = `${AL.money(P.monthRevenueNet)} <span class="unit">${t('sar')}</span>`;
  $('#k-pending').textContent = AL.money(P.pendingVouchers);
  AL.barChart($('#week-chart'), {
    labels: t('days').split(','), series: P.weekBookings, height: 200, format: AL.money,
  });
}

/* ============================================================
   Vouchers (with OTP stage)
   ============================================================ */
let currentVoucher = null;

window.VFLOW = {
  _rerender() { voucherCard(currentVoucher, P.vouchers[currentVoucher]); },
  sendOtp() {
    P.vouchers[currentVoucher]._stage = 'otp';
    this._rerender();
    AL.toast(t('otp_sent'));
    setTimeout(() => $('#otp-in')?.focus(), 50);
  },
  resendOtp() { AL.toast(t('otp_sent')); $('#otp-in')?.focus(); },
  confirmOtp() {
    const val = ($('#otp-in')?.value || '').trim();
    if (val !== OTP_CODE) { AL.toast(t('otp_wrong'), 'error'); return; }
    const v = P.vouchers[currentVoucher];
    if (v._stage === 'otp2') { this.complete(); return; }
    v._stage = 'verified';
    this._rerender();
    AL.toast(t('otp_ok'));
  },
  start() {
    P.vouchers[currentVoucher]._stage = 'started';
    this._rerender();
  },
  requestComplete() {
    P.vouchers[currentVoucher]._stage = 'otp2';
    this._rerender();
    AL.toast(t('otp_sent'));
    setTimeout(() => $('#otp-in')?.focus(), 50);
  },
  complete() {
    P.vouchers[currentVoucher]._stage = 'done';
    P.pendingVouchers = Math.max(0, P.pendingVouchers - 1);
    P.earnings.balance += P.vouchers[currentVoucher].payout;
    $('#voucher-badge').textContent = P.pendingVouchers;
    this._rerender();
    renderOverview(); renderEarnings();
    AL.toast(t('v_completed_msg'));
  },
};

function voucherCard(code, v) {
  const box = $('#v-result');
  if (!v) {
    box.innerHTML = `
      <div class="voucher-result bad">
        <div class="vr-head"><span class="vr-ic" style="background:var(--red)">✕</span>
          <div>${t('v_notfound')}<div class="small muted" style="font-weight:500">${t('v_notfound_sub')}</div></div>
        </div>
      </div>`;
    return;
  }
  if (v.status === 'used') {
    box.innerHTML = `
      <div class="voucher-result warn">
        <div class="vr-head"><span class="vr-ic" style="background:var(--amber)">!</span>${t('v_used')}</div>
        <div class="mt-2">
          <div class="kv"><span class="k">${t('v_customer')}</span><span class="v">${L(v.customer)}</span></div>
          <div class="kv"><span class="k">${t('v_service')}</span><span class="v">${L(v.service)}</span></div>
          <div class="kv"><span class="k">${t('v_used_at')}</span><span class="v cell-num">${v.usedAt}</span></div>
        </div>
      </div>`;
    return;
  }
  if (v.status === 'expired') {
    box.innerHTML = `
      <div class="voucher-result bad">
        <div class="vr-head"><span class="vr-ic" style="background:var(--red)">✕</span>${t('v_expired')}</div>
        <div class="mt-2">
          <div class="kv"><span class="k">${t('v_customer')}</span><span class="v">${L(v.customer)}</span></div>
          <div class="kv"><span class="k">${t('v_service')}</span><span class="v">${L(v.service)}</span></div>
          <div class="kv"><span class="k">${t('v_expiry')}</span><span class="v cell-num">${v.expiry}</span></div>
        </div>
      </div>`;
    return;
  }
  currentVoucher = code;
  const stage = v._stage || 'ready';
  box.innerHTML = `
    <div class="voucher-result ok">
      <div class="vr-head"><span class="vr-ic" style="background:var(--green)">✓</span>${t('v_valid')}
        <span class="chip navy" style="margin-inline-start:auto;direction:ltr">${code}</span>
      </div>
      <div class="mt-2">
        <div class="kv"><span class="k">${t('v_customer')}</span><span class="v">${L(v.customer)} · <span class="cell-num">${v.phone}</span></span></div>
        <div class="kv"><span class="k">${t('v_car')}</span><span class="v">${L(v.car)}</span></div>
        <div class="kv"><span class="k">${t('v_service')}</span><span class="v">${L(v.service)}</span></div>
        <div class="kv"><span class="k">${t('v_branch')}</span><span class="v">${L(v.branch)}</span></div>
        <div class="kv"><span class="k">${t('v_amount')}</span><span class="v cell-num">${AL.sar(v.amount)}</span></div>
        <div class="kv"><span class="k">${t('v_payout')}</span><span class="v cell-num" style="color:var(--green)">${AL.sar(v.payout, 2)}</span></div>
        <div class="kv"><span class="k">${t('v_expiry')}</span><span class="v cell-num">${v.expiry}</span></div>
      </div>
      <div class="mt-4">${flowControls(stage, 'VFLOW')}</div>
    </div>`;
  if (stage === 'otp') setTimeout(() => $('#otp-in')?.focus(), 50);
}

function checkVoucher() {
  const code = $('#v-input').value.trim().toUpperCase();
  if (!code) return;
  voucherCard(code, P.vouchers[code] || null);
}
$('#v-check').addEventListener('click', checkVoucher);
$('#v-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') checkVoucher(); });
$('#v-scan').addEventListener('click', () => AL.openModal('scan-modal'));
$('#simulate-scan').addEventListener('click', () => {
  AL.closeModal('scan-modal');
  $('#v-input').value = 'AL-8X7K-92Q1';
  checkVoucher();
});

/* ============================================================
   Reservations — list + Outlook-style week calendar,
   click → modal with the same OTP-gated flow.
   ============================================================ */
let currentRes = null; // reference into P.reservations or P.calendarWeek

window.RFLOW = {
  sendOtp() {
    currentRes._stage = 'otp'; resModal(); AL.toast(t('otp_sent'));
    setTimeout(() => $('#otp-in')?.focus(), 50);
  },
  resendOtp() { AL.toast(t('otp_sent')); $('#otp-in')?.focus(); },
  confirmOtp() {
    const val = ($('#otp-in')?.value || '').trim();
    if (val !== OTP_CODE) { AL.toast(t('otp_wrong'), 'error'); return; }
    if (currentRes._stage === 'otp2') { this.complete(); return; }
    currentRes._stage = 'verified'; resModal(); AL.toast(t('otp_ok'));
  },
  start() {
    currentRes._stage = 'started'; currentRes.status = 'in_progress';
    resModal(); renderReservations(); renderCalendar();
  },
  requestComplete() {
    currentRes._stage = 'otp2'; resModal(); AL.toast(t('otp_sent'));
    setTimeout(() => $('#otp-in')?.focus(), 50);
  },
  complete() {
    currentRes._stage = 'done'; currentRes.status = 'completed';
    if (currentRes.amount) P.earnings.balance += currentRes.amount * .85;
    resModal(); renderReservations(); renderCalendar(); renderEarnings();
    AL.toast(t('v_completed_msg'));
  },
};

function resModal() {
  const r = currentRes;
  if (!r) return;
  // derive stage from status when first opened
  if (!r._stage) {
    r._stage = r.status === 'in_progress' ? 'started'
      : r.status === 'completed' ? 'done' : 'ready';
  }
  const showFlow = !['dispute', 'new'].includes(r.status) || r._stage !== 'ready';
  $('#res-modal-body').innerHTML = `
    <h3>${t('res_flow_title')}
      <span class="chip ${STATUS_CHIP[r.status] || 'gray'}" style="margin-inline-start:8px">${t('st_' + r.status)}</span>
      <button class="x js-close" onclick="AL.closeModal('res-modal')">✕</button></h3>
    <div class="kv"><span class="k">${t('v_customer')}</span><span class="v">${L(r.customer)}</span></div>
    <div class="kv"><span class="k">${t('v_service')}</span><span class="v">${L(r.service)}</span></div>
    ${r.branch ? `<div class="kv"><span class="k">${t('v_branch')}</span><span class="v">${L(r.branch)}</span></div>` : ''}
    <div class="kv"><span class="k">${t('th_time')}</span><span class="v cell-num">${r.time || fmtHour(r.start)}</span></div>
    ${r.amount ? `<div class="kv"><span class="k">${t('v_amount')}</span><span class="v cell-num">${AL.sar(r.amount)}</span></div>` : ''}
    ${r.amount ? `<div class="kv"><span class="k">${t('v_payout')}</span><span class="v cell-num" style="color:var(--green)">${AL.sar(r.amount * .85, 2)}</span></div>` : ''}
    <div class="mt-4" id="res-flow-zone">${showFlow ? flowControls(r._stage, 'RFLOW') : ''}</div>`;
  AL.openModal('res-modal');
  if (r._stage === 'otp') setTimeout(() => $('#otp-in')?.focus(), 50);
}

function renderReservations() {
  const tb = $('#res-table tbody');
  tb.innerHTML = '';
  let newCount = 0;
  P.reservations.forEach((r, i) => {
    if (r.status === 'new') newCount++;
    const tr = document.createElement('tr');
    tr.className = 'clickable';
    tr.addEventListener('click', () => { currentRes = r; resModal(); });
    tr.innerHTML = `
      <td class="cell-num">${r.time}</td>
      <td class="cell-strong">${L(r.customer)}</td>
      <td>${L(r.service)}</td>
      <td>${L(r.branch)}</td>
      <td class="cell-num">${AL.sar(r.amount)}</td>
      <td><span class="chip ${STATUS_CHIP[r.status]}">${t('st_' + r.status)}</span></td>
      <td>${r.status === 'new' ? `
        <button class="btn success sm" onclick="event.stopPropagation();resAction(${i}, true)">${t('accept')}</button>
        <button class="btn danger sm" onclick="event.stopPropagation();resAction(${i}, false)">${t('decline')}</button>` : ''}</td>`;
    tb.appendChild(tr);
  });
  const badge = $('#new-res-badge');
  badge.textContent = newCount;
  badge.style.display = newCount ? '' : 'none';
}
window.resAction = (i, accept) => {
  if (accept) P.reservations[i].status = 'confirmed';
  else P.reservations.splice(i, 1);
  renderReservations();
  AL.toast(t(accept ? 'accepted' : 'declined'), accept ? 'success' : 'error');
};

/* ---------- Outlook-style week calendar ---------- */
const CAL_START = 9, CAL_END = 22, HOUR_PX = 44;
const TODAY_IDX = 2;      // Monday in the demo week
const WEEK_DATES = [1, 2, 3, 4, 5, 6, 7]; // August 2026

function fmtHour(h) {
  const hh = Math.floor(h), mm = Math.round((h - hh) * 60);
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function renderCalendar() {
  const grid = $('#calendar');
  if (!grid) return;
  grid.innerHTML = '';
  const days = t('days').split(',');
  const colH = (CAL_END - CAL_START) * HOUR_PX;

  // header row
  grid.appendChild(Object.assign(document.createElement('div'), { className: 'cal-head cal-gutter' }));
  days.forEach((d, i) => {
    const h = document.createElement('div');
    h.className = `cal-head${i === TODAY_IDX ? ' today' : ''}`;
    h.innerHTML = `${d}<span class="d-num">${WEEK_DATES[i]}</span>`;
    grid.appendChild(h);
  });

  // hour gutter
  const gutter = document.createElement('div');
  gutter.className = 'cal-hours cal-gutter';
  gutter.style.height = `${colH}px`;
  for (let h = CAL_START; h <= CAL_END; h++) {
    const lb = document.createElement('div');
    lb.className = 'h-label';
    lb.style.top = `${(h - CAL_START) * HOUR_PX}px`;
    lb.textContent = fmtHour(h);
    gutter.appendChild(lb);
  }
  grid.appendChild(gutter);

  // day columns
  for (let d = 0; d < 7; d++) {
    const col = document.createElement('div');
    col.className = `cal-day-col${d === TODAY_IDX ? ' today' : ''}`;
    col.style.height = `${colH}px`;

    P.calendarWeek.filter((e) => e.day === d).forEach((e) => {
      const c = CAL_COLORS[e.status] || CAL_COLORS.confirmed;
      const ev = document.createElement('div');
      ev.className = 'cal-event';
      ev.style.top = `${(e.start - CAL_START) * HOUR_PX + 1}px`;
      ev.style.height = `${Math.max(e.dur * HOUR_PX - 3, 22)}px`;
      ev.style.background = c.bg;
      ev.style.borderColor = c.border;
      ev.style.color = 'var(--ink)';
      ev.innerHTML = `
        <div class="ev-time">${fmtHour(e.start)} – ${fmtHour(e.start + e.dur)}</div>
        <div class="ev-name">${L(e.customer)}</div>
        <div class="ev-svc">${L(e.service)}</div>`;
      ev.addEventListener('click', () => { currentRes = e; resModal(); });
      col.appendChild(ev);
    });

    if (d === TODAY_IDX) {
      const now = document.createElement('div');
      now.className = 'cal-now';
      now.style.top = `${(13.25 - CAL_START) * HOUR_PX}px`; // 13:15 demo "now"
      col.appendChild(now);
    }
    grid.appendChild(col);
  }

  // legend
  const lg = $('#cal-legend');
  lg.innerHTML = Object.entries(CAL_COLORS)
    .filter(([k]) => ['new', 'confirmed', 'awaiting', 'in_progress', 'completed'].includes(k))
    .map(([k, c]) => `<span class="li"><span class="dot" style="background:${c.border}"></span>${t('st_' + k)}</span>`)
    .join('');
}

document.querySelectorAll('#res-view-seg button').forEach((b) => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#res-view-seg button').forEach((x) => x.classList.toggle('active', x === b));
    $('#res-list-view').classList.toggle('hidden', b.dataset.view !== 'list');
    $('#res-cal-view').classList.toggle('hidden', b.dataset.view !== 'cal');
  });
});

/* ---------- earnings ---------- */
function renderEarnings() {
  $('#e-balance').innerHTML = `${AL.money(P.earnings.balance, 2)} <span class="unit" style="color:rgba(255,255,255,.6)">${t('sar')}</span>`;
  $('#e-pending').innerHTML = `${AL.money(P.earnings.pendingPayout, 2)} <span class="unit">${t('sar')}</span>`;
  const tb = $('#earn-table tbody');
  tb.innerHTML = '';
  P.earnings.rows.forEach((r) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-strong cell-num">${r.id}</td>
      <td class="cell-num cell-muted">${r.date}</td>
      <td class="cell-num">${AL.sar(r.gross)}</td>
      <td class="cell-num" style="color:var(--red)">− ${AL.sar(r.commission, 1)}</td>
      <td class="cell-num" style="color:var(--green);font-weight:800">${AL.sar(r.net, 1)}</td>`;
    tb.appendChild(tr);
  });
}
$('#e-withdraw').addEventListener('click', () => AL.toast(t('withdraw_ok')));

/* ---------- branches & packages ---------- */
function renderBranches() {
  const bl = $('#branches-list');
  bl.innerHTML = '';
  P.branches.forEach((b) => {
    const div = document.createElement('div');
    div.className = 'alert-row';
    div.innerHTML = `
      <div class="alert-ic" style="background:var(--blue-bg)">🏬</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:.85rem">${L(b.name)}</div>
        <div class="small muted cell-num" style="direction:ltr;text-align:end">${b.phone}</div>
      </div>
      <div style="text-align:end">
        <div class="chip gray cell-num">🕙 ${b.hours}</div>
        <div class="small muted mt-2">${b.bays} ${t('bays')}</div>
      </div>`;
    bl.appendChild(div);
  });

  const pl = $('#packages-list');
  pl.innerHTML = '';
  P.packages.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'alert-row';
    row.innerHTML = `
      <div style="flex:1;font-weight:600;font-size:.82rem">${L(p.name)}</div>
      <input type="number" value="${p.price}" id="pk-${i}"
        style="width:92px;border:1px solid var(--border);border-radius:9px;padding:6px 9px;font-weight:700;direction:ltr;text-align:center">
      <button class="btn outline sm" onclick="savePkg(${i})">${t('save')}</button>`;
    pl.appendChild(row);
  });
}
window.savePkg = (i) => {
  const v = Number($(`#pk-${i}`).value);
  if (v > 0) { P.packages[i].price = v; AL.toast(t('price_saved')); }
};

/* ---------- financial analytics ---------- */
function renderAnalytics() {
  const AN = P.analytics;
  if (!$('#an-net-chart')) return;
  AL.areaChart($('#an-net-chart'), {
    labels: SEED.months[AL.lang], series: AN.netTrend, height: 225,
    color: '#1E9E5A', format: (v) => AL.sar(v),
  });
  AL.donutChart($('#an-pkg-donut'), {
    slices: AN.byPackage, centerLabel: AL.money(P.monthRevenueNet), size: 160, thickness: 24,
  });
  AL.heatmap($('#an-heat'), {
    days: t('days').split(','),
    hours: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
    matrix: AN.hoursHeat,
    color: '208, 134, 21',
  });
  const tb = $('#an-payout-table tbody');
  tb.innerHTML = '';
  AN.payoutHistory.forEach((p) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cell-num cell-muted">${p.id}</td>
      <td>${L(p.period)}</td>
      <td class="cell-num cell-strong">${AL.sar(p.amount)}</td>
      <td class="cell-num cell-muted">${p.date}</td>
      <td><span class="chip ${p.status === 'paid' ? 'green' : 'gold'}">${t(p.status === 'paid' ? 'paid' : 'st_processing')}</span></td>`;
    tb.appendChild(tr);
  });
}
$('#an-export').addEventListener('click', () => {
  AL.exportCSV('elite-payouts.csv',
    ['ID', 'Period', 'Amount SAR', 'Date', 'Status'],
    P.analytics.payoutHistory.map((p) => [p.id, L(p.period), p.amount, p.date, p.status]));
  AL.toast(t('exported'));
});

/* ---------- staff ---------- */
function renderStaff() {
  const root = $('#staff-list');
  root.innerHTML = '';
  P.staff.forEach((s) => {
    const row = document.createElement('div');
    row.className = 'staff-row';
    row.innerHTML = `
      <div class="staff-avatar">${L(s.name).slice(0, 1)}</div>
      <div style="flex:1;min-width:150px">
        <div style="font-weight:700;font-size:.85rem">${L(s.name)}
          <span style="color:var(--star);font-size:.72rem;font-weight:800">★ ${s.rating}</span></div>
        <div class="small muted">${L(s.role)} · ${L(s.branch)}</div>
      </div>
      <div class="stat-pill" style="min-width:86px"><div class="v">${s.todayJobs}</div><div class="l">${t('jobs_today')}</div></div>
      <div style="flex:1;max-width:220px">
        <div style="display:flex;justify-content:space-between;font-size:.68rem;font-weight:700;margin-bottom:4px">
          <span class="muted">${t('utilization')}</span><span class="cell-num">${s.utilization}%</span>
        </div>
        <div class="progressbar"><div style="width:${s.utilization}%;background:${s.utilization > 80 ? 'var(--red)' : s.utilization > 60 ? 'var(--amber)' : 'var(--green)'}"></div></div>
      </div>`;
    root.appendChild(row);
  });
}

/* ---------- offers ---------- */
function renderOffers() {
  const root = $('#offers-list');
  root.innerHTML = '';
  P.offers.forEach((o, i) => {
    const row = document.createElement('div');
    row.className = 'alert-row';
    row.innerHTML = `
      <div class="alert-ic" style="background:var(--cream)">🏷️</div>
      <div style="flex:1;min-width:160px">
        <div style="font-weight:700;font-size:.84rem">${L(o.title)}</div>
        <div class="small muted">${L(SEED.services[o.service])} · ${t('offer_until')}: <span class="cell-num">${o.until}</span> · ${AL.money(o.uses)} ${t('offer_uses')}</div>
      </div>
      ${o.discount ? `<span class="chip lime">-${o.discount}%</span>` : ''}
      <span class="chip ${o.active ? 'green' : 'gray'}">${t(o.active ? 'active' : 'inactive')}</span>
      <button class="btn outline sm" onclick="toggleOffer(${i})">${t(o.active ? 'disable' : 'enable')}</button>`;
    root.appendChild(row);
  });
}
window.toggleOffer = (i) => { P.offers[i].active = !P.offers[i].active; renderOffers(); };

$('#new-offer-btn').addEventListener('click', () => {
  document.querySelectorAll('#of-service option').forEach((o) => { o.textContent = L(SEED.services[o.value]); });
  AL.openModal('offer-modal');
});
$('#of-create').addEventListener('click', () => {
  const title = $('#of-title').value.trim();
  if (!title) return;
  P.offers.unshift({
    title: { ar: title, en: title },
    service: $('#of-service').value,
    discount: Number($('#of-discount').value) || 0,
    until: $('#of-until').value || '2026-08-31',
    uses: 0, active: true,
  });
  AL.closeModal('offer-modal');
  $('#of-title').value = '';
  renderOffers();
  AL.toast(t('offer_created'));
});

/* ---------- reviews ---------- */
function renderReviews() {
  const root = $('#reviews-list');
  root.innerHTML = '';
  P.reviews.forEach((rv, i) => {
    const stars = '★'.repeat(rv.rating) + '☆'.repeat(5 - rv.rating);
    const card = document.createElement('div');
    card.className = 'card mb-4';
    card.innerHTML = `
      <div class="flex">
        <div class="avatar" style="width:34px;height:34px;font-size:.7rem;background:var(--chip-bg);color:var(--navy)">${L(rv.customer).slice(0, 1)}</div>
        <div class="grow">
          <div style="font-weight:700;font-size:.85rem">${L(rv.customer)}</div>
          <div class="small muted cell-num">${rv.date}</div>
        </div>
        <div style="color:var(--star);font-size:.95rem;letter-spacing:2px">${stars}</div>
      </div>
      <p style="font-size:.85rem;margin-top:10px;line-height:1.8">${L(rv.text)}</p>
      <div id="reply-zone-${i}" class="mt-2">
        ${rv.reply ? `
          <div style="background:var(--bg);border-radius:11px;padding:10px 14px;font-size:.78rem">
            <b style="color:var(--gold-text)">↩ ${t('your_reply')}:</b> ${L(rv.reply)}
          </div>` : `
          <div class="flex" style="gap:8px">
            <input id="reply-in-${i}" placeholder="${t('reply_ph')}"
              style="flex:1;border:1px solid var(--border);border-radius:10px;padding:8px 12px;font-size:.8rem;outline:none">
            <button class="btn navy sm" onclick="sendReply(${i})">${t('reply_btn')}</button>
          </div>`}
      </div>`;
    root.appendChild(card);
  });
}
window.sendReply = (i) => {
  const val = $(`#reply-in-${i}`).value.trim();
  if (!val) return;
  P.reviews[i].reply = { ar: val, en: val };
  renderReviews();
  AL.toast(t('replied'));
};

/* ---------- boot ---------- */
function renderAll() {
  renderOverview(); renderReservations(); renderCalendar();
  renderEarnings(); renderAnalytics(); renderBranches(); renderStaff(); renderOffers(); renderReviews();
}
document.addEventListener('al:lang', renderAll);
document.addEventListener('al:entered', renderAll);
renderAll();
