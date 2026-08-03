/* ============================================================
   AutoLink Portals — bilingual seed data (all fake, demo only)
   ============================================================ */

const SEED = {
  /* ---------- shared ---------- */
  cities: {
    jeddah: { ar: 'جدة', en: 'Jeddah' },
    riyadh: { ar: 'الرياض', en: 'Riyadh' },
  },

  months: {
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  },

  services: {
    tinting:  { ar: 'تظليل نوافذ',  en: 'Window Tinting', color: '#0B1B33' },
    ppf:      { ar: 'حماية PPF',    en: 'PPF Protection', color: '#F0A62B' },
    wash:     { ar: 'غسيل',         en: 'Car Wash',       color: '#1E7AE0' },
    detailing:{ ar: 'تلميع وتفصيل', en: 'Detailing',      color: '#7B4FD1' },
  },

  /* ---------- admin ---------- */
  admin: {
    kpis: {
      week: {
        bookings: 618, target: 580, gmv: 486000, commissions: 72900,
        providers: 85, newCustomers: 342, avgBooking: 786,
        deltas: { bookings: 6.5, gmv: 4.2, commissions: 4.2, providers: 1.2, newCustomers: 8.9, avgBooking: -1.3 },
      },
      month: {
        bookings: 2606, target: 2500, gmv: 2085000, commissions: 312750,
        providers: 85, newCustomers: 1418, avgBooking: 800,
        deltas: { bookings: 12.4, gmv: 9.8, commissions: 9.8, providers: 4.9, newCustomers: 15.2, avgBooking: 2.1 },
      },
      year: {
        bookings: 24980, target: 24000, gmv: 19684000, commissions: 2952600,
        providers: 85, newCustomers: 11250, avgBooking: 788,
        deltas: { bookings: 31.7, gmv: 28.4, commissions: 28.4, providers: 41.6, newCustomers: 36.8, avgBooking: -0.8 },
      },
    },
    monthlyBookings:    [1480, 1620, 1750, 1890, 2040, 2210, 2380, 2606],
    monthlyCommissions: [178000, 194000, 210000, 227000, 245000, 265000, 286000, 312750],
    byService: [
      { key: 'tinting', value: 45 }, { key: 'ppf', value: 25 },
      { key: 'wash', value: 20 }, { key: 'detailing', value: 10 },
    ],
    byCity: [
      { label: { ar: 'جدة', en: 'Jeddah' }, value: 1520, color: '#F0A62B' },
      { label: { ar: 'الرياض', en: 'Riyadh' }, value: 1086, color: '#0B1B33' },
    ],
    topProviders: [
      { name: { ar: 'XPEL السعودية', en: 'XPEL Saudi' }, logo: 'XPEL', bookings: 316, revenue: 947000, rating: 4.8 },
      { name: { ar: 'مركز النخبة للتظليل', en: 'Elite Tinting Center' }, logo: 'النخبة', bookings: 289, revenue: 261000, rating: 4.7 },
      { name: { ar: 'جي-تكنيك', en: 'Gtechniq' }, logo: 'GT', bookings: 244, revenue: 219000, rating: 4.9 },
      { name: { ar: '3M السعودية', en: '3M Saudi' }, logo: '3M', bookings: 212, revenue: 275000, rating: 4.6 },
      { name: { ar: 'في-كول V-KOOL', en: 'V-KOOL' }, logo: 'V-K', bookings: 198, revenue: 297000, rating: 4.7 },
    ],
    latestBookings: [
      { id: 'BK-90412', customer: { ar: 'محمد العتيبي', en: 'Mohammed Alotaibi' }, service: 'tinting', provider: { ar: 'مركز النخبة', en: 'Elite Center' }, city: 'jeddah', amount: 850, status: 'confirmed' },
      { id: 'BK-90411', customer: { ar: 'سارة الغامدي', en: 'Sara Alghamdi' }, service: 'ppf', provider: { ar: 'XPEL السعودية', en: 'XPEL Saudi' }, city: 'riyadh', amount: 2999, status: 'in_progress' },
      { id: 'BK-90410', customer: { ar: 'خالد الحربي', en: 'Khaled Alharbi' }, service: 'wash', provider: { ar: 'نانو شيلد', en: 'Nano Shield' }, city: 'jeddah', amount: 120, status: 'completed' },
      { id: 'BK-90409', customer: { ar: 'نورة القحطاني', en: 'Noura Alqahtani' }, service: 'detailing', provider: { ar: 'جي-تكنيك', en: 'Gtechniq' }, city: 'riyadh', amount: 640, status: 'completed' },
      { id: 'BK-90408', customer: { ar: 'فهد الشمري', en: 'Fahad Alshammari' }, service: 'tinting', provider: { ar: 'لومار LLumar', en: 'LLumar' }, city: 'jeddah', amount: 999, status: 'dispute' },
      { id: 'BK-90407', customer: { ar: 'ريم العنزي', en: 'Reem Alanazi' }, service: 'ppf', provider: { ar: 'في-كول', en: 'V-KOOL' }, city: 'riyadh', amount: 5400, status: 'confirmed' },
    ],
    voucherLog: [
      { code: 'AL-8X2M-71PQ', provider: { ar: 'مركز النخبة', en: 'Elite Center' }, amount: 850, commission: 127.5, status: 'redeemed' },
      { code: 'AL-3KD9-44RT', provider: { ar: 'XPEL السعودية', en: 'XPEL Saudi' }, amount: 2999, commission: 449.85, status: 'redeemed' },
      { code: 'AL-7Y1N-98WD', provider: { ar: 'جي-تكنيك', en: 'Gtechniq' }, amount: 449, commission: 67.35, status: 'pending' },
      { code: 'AL-5QW2-13ZX', provider: { ar: 'نانو شيلد', en: 'Nano Shield' }, amount: 75, commission: 11.25, status: 'redeemed' },
      { code: 'AL-9J4H-62BV', provider: { ar: 'لومار LLumar', en: 'LLumar' }, amount: 1499, commission: 224.85, status: 'expired' },
    ],
    transactions: [
      { id: 'TX-55391', type: { ar: 'دفع حجز', en: 'Booking payment' }, ref: 'BK-90412', amount: 850, dir: 'in' },
      { id: 'TX-55390', type: { ar: 'تسوية مزود', en: 'Provider payout' }, ref: 'PV-2210', amount: 12750, dir: 'out' },
      { id: 'TX-55389', type: { ar: 'دفع حجز', en: 'Booking payment' }, ref: 'BK-90411', amount: 2999, dir: 'in' },
      { id: 'TX-55388', type: { ar: 'استرداد', en: 'Refund' }, ref: 'BK-90301', amount: 320, dir: 'out' },
      { id: 'TX-55387', type: { ar: 'عمولة منصة', en: 'Platform commission' }, ref: 'BK-90410', amount: 18, dir: 'in' },
    ],
    applications: [
      { name: { ar: 'مركز الصقر للعناية', en: 'Alsaqr Care Center' }, city: 'riyadh', service: 'detailing', date: '2026-08-01' },
      { name: { ar: 'درع الخليج PPF', en: 'Gulf Shield PPF' }, city: 'jeddah', service: 'ppf', date: '2026-08-02' },
    ],
    disputes: [
      { id: 'DS-1082', booking: 'BK-90408', customer: { ar: 'فهد الشمري', en: 'Fahad Alshammari' }, reason: { ar: 'جودة التظليل غير مطابقة', en: 'Tint quality mismatch' } },
    ],
    finance: {
      gmvTrend: [1490000, 1580000, 1660000, 1730000, 1810000, 1900000, 1990000, 2085000],
      commByService: {
        tinting:   [80100, 87300, 94500, 102150, 110250, 119250, 128700, 140737],
        ppf:       [44500, 48500, 52500, 56750, 61250, 66250, 71500, 78187],
        wash:      [35600, 38800, 42000, 45400, 49000, 53000, 57200, 62550],
        detailing: [17800, 19400, 21000, 22700, 24500, 26500, 28600, 31276],
      },
      pnl: [
        { key: 'pnl_gmv', value: 2085000, dir: 'in' },
        { key: 'pnl_comm', value: 312750, dir: 'in' },
        { key: 'pnl_promo', value: -48200, dir: 'out' },
        { key: 'pnl_cashback', value: -31300, dir: 'out' },
        { key: 'pnl_gateway', value: -18765, dir: 'out' },
        { key: 'pnl_net', value: 214485, dir: 'net' },
      ],
      refunds: [
        { id: 'RF-0921', booking: 'BK-90301', customer: { ar: 'مازن الشريف', en: 'Mazen Alsharif' }, reason: { ar: 'إلغاء قبل الموعد', en: 'Cancelled before slot' }, amount: 320, status: 'paid' },
        { id: 'RF-0920', booking: 'BK-90244', customer: { ar: 'هشام قاضي', en: 'Hisham Qadi' }, reason: { ar: 'نزاع — جودة الخدمة', en: 'Dispute — service quality' }, amount: 850, status: 'review' },
        { id: 'RF-0918', booking: 'BK-90188', customer: { ar: 'ليان أحمد', en: 'Layan Ahmed' }, reason: { ar: 'مزود غير متاح', en: 'Provider unavailable' }, amount: 449, status: 'paid' },
      ],
      cashbackMonth: 31300, referralMonth: 12750,
    },
    customers: [
      { name: { ar: 'محمد العتيبي', en: 'Mohammed Alotaibi' }, phone: '0551244412', city: 'jeddah', joined: '2026-03-14', bookings: 9, spend: 6420, wallet: 145, lastService: 'tinting', last: '2026-08-03', vip: true, active: true },
      { name: { ar: 'سارة الغامدي', en: 'Sara Alghamdi' }, phone: '0554821190', city: 'riyadh', joined: '2026-01-27', bookings: 7, spend: 11240, wallet: 320, lastService: 'ppf', last: '2026-08-02', vip: true, active: true },
      { name: { ar: 'خالد الحربي', en: 'Khaled Alharbi' }, phone: '0559034471', city: 'jeddah', joined: '2026-05-08', bookings: 12, spend: 1980, wallet: 25, lastService: 'wash', last: '2026-08-03', vip: false, active: true },
      { name: { ar: 'نورة القحطاني', en: 'Noura Alqahtani' }, phone: '0552718852', city: 'riyadh', joined: '2026-02-19', bookings: 5, spend: 3350, wallet: 90, lastService: 'detailing', last: '2026-08-01', vip: false, active: true },
      { name: { ar: 'فهد الشمري', en: 'Fahad Alshammari' }, phone: '0556690341', city: 'jeddah', joined: '2026-06-30', bookings: 3, spend: 2140, wallet: 0, lastService: 'tinting', last: '2026-08-02', vip: false, active: true },
      { name: { ar: 'ريم العنزي', en: 'Reem Alanazi' }, phone: '0553308765', city: 'riyadh', joined: '2025-12-05', bookings: 11, spend: 18400, wallet: 610, lastService: 'ppf', last: '2026-07-30', vip: true, active: true },
      { name: { ar: 'بدر المطوع', en: 'Badr Almutawa' }, phone: '0558812204', city: 'jeddah', joined: '2026-04-22', bookings: 2, spend: 495, wallet: 10, lastService: 'wash', last: '2026-07-18', vip: false, active: false },
      { name: { ar: 'لمى باناجه', en: 'Lama Banajah' }, phone: '0557743918', city: 'jeddah', joined: '2026-07-02', bookings: 4, spend: 2890, wallet: 75, lastService: 'detailing', last: '2026-07-29', vip: false, active: true },
    ],
    directory: [
      { name: { ar: 'XPEL السعودية', en: 'XPEL Saudi' }, logo: 'XPEL', city: 'riyadh', service: 'ppf', bookings: 316, rating: 4.8, active: true },
      { name: { ar: 'مركز النخبة للتظليل', en: 'Elite Tinting Center' }, logo: 'النخبة', city: 'jeddah', service: 'tinting', bookings: 289, rating: 4.7, active: true },
      { name: { ar: 'جي-تكنيك', en: 'Gtechniq' }, logo: 'GT', city: 'jeddah', service: 'detailing', bookings: 244, rating: 4.9, active: true },
      { name: { ar: '3M السعودية', en: '3M Saudi' }, logo: '3M', city: 'riyadh', service: 'tinting', bookings: 212, rating: 4.6, active: true },
      { name: { ar: 'نانو شيلد', en: 'Nano Shield' }, logo: 'NS', city: 'jeddah', service: 'wash', bookings: 187, rating: 4.6, active: true },
      { name: { ar: 'مغاسل بريق', en: 'Bareeq Wash' }, logo: 'بريق', city: 'jeddah', service: 'wash', bookings: 165, rating: 4.2, active: false },
      { name: { ar: 'لومار LLumar', en: 'LLumar' }, logo: 'LL', city: 'riyadh', service: 'tinting', bookings: 158, rating: 4.5, active: true },
    ],
    payouts: [
      { provider: { ar: 'XPEL السعودية', en: 'XPEL Saudi' }, period: { ar: 'يوليو 2026', en: 'Jul 2026' }, gross: 947000, commission: 142050, net: 804950, paid: false },
      { provider: { ar: 'مركز النخبة للتظليل', en: 'Elite Tinting' }, period: { ar: 'يوليو 2026', en: 'Jul 2026' }, gross: 261000, commission: 39150, net: 221850, paid: false },
      { provider: { ar: 'جي-تكنيك', en: 'Gtechniq' }, period: { ar: 'يوليو 2026', en: 'Jul 2026' }, gross: 219000, commission: 32850, net: 186150, paid: true },
      { provider: { ar: 'نانو شيلد', en: 'Nano Shield' }, period: { ar: 'يوليو 2026', en: 'Jul 2026' }, gross: 84000, commission: 12600, net: 71400, paid: true },
    ],
    promos: [
      { code: 'WELCOME10', type: { ar: 'خصم 10%', en: '10% off' }, uses: 1418, cap: 5000, active: true },
      { code: 'FLASH30', type: { ar: 'خصم 30% (فلاش)', en: '30% off (flash)' }, uses: 612, cap: 1000, active: true },
      { code: 'NANO25', type: { ar: 'خصم 25% نانو سيراميك', en: '25% off nano ceramic' }, uses: 231, cap: 800, active: true },
      { code: 'EID50', type: { ar: 'خصم 50 ر.س', en: 'SAR 50 off' }, uses: 3204, cap: 3204, active: false },
    ],
  },

  /* ---------- provider (مركز النخبة للتظليل) ---------- */
  provider: {
    name: { ar: 'مركز النخبة للتظليل', en: 'Elite Tinting Center' },
    logoText: 'النخبة',
    todayBookings: 14,
    monthRevenueNet: 74375,     // after 15% commission
    monthRevenueGross: 87500,
    ratingPlatform: 4.8,
    ratingGoogle: 4.7,
    pendingVouchers: 6,
    weekBookings: [8, 11, 9, 14, 12, 17, 14],
    vouchers: {
      'AL-8X7K-92Q1': {
        status: 'valid',
        customer: { ar: 'محمد العتيبي', en: 'Mohammed Alotaibi' },
        phone: '05x xxx 4412',
        car: { ar: 'لكزس LX600 — أسود 2024', en: 'Lexus LX600 — Black 2024' },
        service: { ar: 'تظليل نانو سيراميك كامل', en: 'Full nano-ceramic tint' },
        branch: { ar: 'فرع حي الروضة', en: 'Al Rawdah branch' },
        amount: 850, payout: 722.5, expiry: '2026-08-10',
      },
      'AL-USED-0001': {
        status: 'used',
        customer: { ar: 'سعود المطيري', en: 'Saud Almutairi' },
        service: { ar: 'تظليل أمامي', en: 'Front tint' },
        usedAt: '2026-07-28 14:22',
      },
      'AL-EXP-0001': {
        status: 'expired',
        customer: { ar: 'عبدالله السبيعي', en: 'Abdullah Alsubaie' },
        service: { ar: 'تظليل كامل', en: 'Full tint' },
        expiry: '2026-07-15',
      },
    },
    reservations: [
      { id: 'BK-90412', time: '10:30', customer: { ar: 'محمد العتيبي', en: 'Mohammed Alotaibi' }, service: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, branch: { ar: 'الروضة', en: 'Rawdah' }, amount: 850, status: 'awaiting', isNew: false },
      { id: 'BK-90415', time: '11:15', customer: { ar: 'أحمد الزهراني', en: 'Ahmed Alzahrani' }, service: { ar: 'تظليل أمامي', en: 'Front tint' }, branch: { ar: 'الروضة', en: 'Rawdah' }, amount: 350, status: 'new', isNew: true },
      { id: 'BK-90416', time: '12:00', customer: { ar: 'منصور القرني', en: 'Mansour Alqarni' }, service: { ar: 'حماية PPF جزئية', en: 'Partial PPF' }, branch: { ar: 'السلامة', en: 'Salama' }, amount: 1850, status: 'new', isNew: true },
      { id: 'BK-90402', time: '13:30', customer: { ar: 'ياسر الدوسري', en: 'Yasser Aldosari' }, service: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, branch: { ar: 'الروضة', en: 'Rawdah' }, amount: 850, status: 'in_progress', isNew: false },
      { id: 'BK-90399', time: '09:00', customer: { ar: 'تركي الشهري', en: 'Turki Alshehri' }, service: { ar: 'تظليل خلفي', en: 'Rear tint' }, branch: { ar: 'السلامة', en: 'Salama' }, amount: 450, status: 'completed', isNew: false },
      { id: 'BK-90397', time: '2026-08-04 10:00', customer: { ar: 'بندر العسيري', en: 'Bandar Alasiri' }, service: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, branch: { ar: 'الروضة', en: 'Rawdah' }, amount: 850, status: 'confirmed', isNew: false },
      { id: 'BK-90394', time: '2026-08-04 12:30', customer: { ar: 'وليد الجهني', en: 'Waleed Aljohani' }, service: { ar: 'تظليل أمامي', en: 'Front tint' }, branch: { ar: 'السلامة', en: 'Salama' }, amount: 350, status: 'dispute', isNew: false },
    ],
    earnings: {
      balance: 38240.50,
      pendingPayout: 6120.00,
      rows: [
        { id: 'BK-90399', date: '2026-08-03', gross: 450, commission: 67.5, net: 382.5 },
        { id: 'BK-90391', date: '2026-08-02', gross: 850, commission: 127.5, net: 722.5 },
        { id: 'BK-90388', date: '2026-08-02', gross: 1850, commission: 277.5, net: 1572.5 },
        { id: 'BK-90384', date: '2026-08-01', gross: 850, commission: 127.5, net: 722.5 },
        { id: 'BK-90379', date: '2026-08-01', gross: 350, commission: 52.5, net: 297.5 },
      ],
    },
    branches: [
      { name: { ar: 'فرع حي الروضة', en: 'Al Rawdah branch' }, hours: '10:00 – 22:00', phone: '012 555 8801', bays: 6 },
      { name: { ar: 'فرع حي السلامة', en: 'Al Salama branch' }, hours: '10:00 – 23:00', phone: '012 555 8802', bays: 4 },
    ],
    packages: [
      { name: { ar: 'نانو سيراميك كامل — ضمان 10 سنوات', en: 'Full nano-ceramic — 10yr warranty' }, price: 850 },
      { name: { ar: 'تظليل أمامي فقط', en: 'Front windows only' }, price: 350 },
      { name: { ar: 'تظليل خلفي', en: 'Rear section' }, price: 450 },
      { name: { ar: 'XPEL Ultimate Plus (شراكة)', en: 'XPEL Ultimate Plus (partner)' }, price: 2999 },
      { name: { ar: 'باقة VIP — تظليل + تلميع', en: 'VIP bundle — tint + polish' }, price: 1299 },
    ],
    reviews: [
      { customer: { ar: 'محمد ع.', en: 'Mohammed A.' }, rating: 5, date: '2026-08-01', text: { ar: 'شغل نظيف جداً والتسليم في الوقت. أنصح فيهم.', en: 'Very clean work, delivered on time. Recommended.' }, reply: null },
      { customer: { ar: 'سلطان ر.', en: 'Sultan R.' }, rating: 4, date: '2026-07-29', text: { ar: 'الجودة ممتازة بس الانتظار كان طويل شوي.', en: 'Great quality but the wait was a bit long.' }, reply: null },
      { customer: { ar: 'عبدالعزيز ن.', en: 'Abdulaziz N.' }, rating: 5, date: '2026-07-25', text: { ar: 'أفضل مركز تظليل جربته في جدة.', en: 'Best tinting center I tried in Jeddah.' }, reply: { ar: 'شكراً لثقتك! نسعد بخدمتك دائماً 🌟', en: 'Thanks for your trust! Always happy to serve 🌟' } },
    ],
    /* Outlook-style week calendar — day: 0=Sat … 6=Fri, hours are 24h floats.
       Today in the demo is Monday (day index 2). */
    calendarWeek: [
      { day: 0, start: 10,   dur: 1.5, customer: { ar: 'سعد الحربي', en: 'Saad Alharbi' },     service: { ar: 'تظليل كامل', en: 'Full tint' },        status: 'completed' },
      { day: 0, start: 13,   dur: 2,   customer: { ar: 'مشعل النفيعي', en: 'Mishal Alnufaie' }, service: { ar: 'PPF جزئي', en: 'Partial PPF' },        status: 'completed' },
      { day: 0, start: 17,   dur: 1,   customer: { ar: 'جاسر الثبيتي', en: 'Jasser Althubaiti' },service: { ar: 'تظليل أمامي', en: 'Front tint' },     status: 'completed' },
      { day: 1, start: 11,   dur: 1.5, customer: { ar: 'نايف السهلي', en: 'Naif Alsahli' },     service: { ar: 'نانو سيراميك', en: 'Nano ceramic' },   status: 'completed' },
      { day: 1, start: 15,   dur: 1,   customer: { ar: 'راشد العمري', en: 'Rashed Alamri' },    service: { ar: 'تظليل خلفي', en: 'Rear tint' },        status: 'dispute' },
      { day: 2, start: 10.5, dur: 1.5, customer: { ar: 'محمد العتيبي', en: 'Mohammed Alotaibi' },service: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, status: 'awaiting' },
      { day: 2, start: 11.25,dur: 1,   customer: { ar: 'أحمد الزهراني', en: 'Ahmed Alzahrani' }, service: { ar: 'تظليل أمامي', en: 'Front tint' },      status: 'new' },
      { day: 2, start: 12,   dur: 2.5, customer: { ar: 'منصور القرني', en: 'Mansour Alqarni' },  service: { ar: 'PPF جزئي', en: 'Partial PPF' },        status: 'new' },
      { day: 2, start: 13.5, dur: 1.5, customer: { ar: 'ياسر الدوسري', en: 'Yasser Aldosari' },  service: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, status: 'in_progress' },
      { day: 2, start: 16,   dur: 1,   customer: { ar: 'هيثم فلمبان', en: 'Haitham Filimban' },  service: { ar: 'تلميع خارجي', en: 'Exterior polish' }, status: 'confirmed' },
      { day: 2, start: 19,   dur: 2,   customer: { ar: 'عماد بخش', en: 'Emad Bakhsh' },          service: { ar: 'PPF كامل', en: 'Full PPF' },           status: 'confirmed' },
      { day: 3, start: 10,   dur: 1.5, customer: { ar: 'بندر العسيري', en: 'Bandar Alasiri' },   service: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, status: 'confirmed' },
      { day: 3, start: 12.5, dur: 1,   customer: { ar: 'وليد الجهني', en: 'Waleed Aljohani' },   service: { ar: 'تظليل أمامي', en: 'Front tint' },      status: 'confirmed' },
      { day: 3, start: 18,   dur: 1.5, customer: { ar: 'فيصل الغامدي', en: 'Faisal Alghamdi' },  service: { ar: 'تظليل كامل', en: 'Full tint' },        status: 'confirmed' },
      { day: 4, start: 11,   dur: 2,   customer: { ar: 'ثامر المالكي', en: 'Thamer Almalki' },   service: { ar: 'PPF جزئي', en: 'Partial PPF' },        status: 'confirmed' },
      { day: 4, start: 16.5, dur: 1,   customer: { ar: 'سامي حريري', en: 'Sami Hariri' },        service: { ar: 'تظليل خلفي', en: 'Rear tint' },        status: 'confirmed' },
      { day: 5, start: 14,   dur: 1.5, customer: { ar: 'طارق مغربي', en: 'Tariq Maghrabi' },     service: { ar: 'نانو سيراميك', en: 'Nano ceramic' },   status: 'confirmed' },
      { day: 6, start: 13,   dur: 2,   customer: { ar: 'غازي الشريف', en: 'Ghazi Alsharif' },    service: { ar: 'PPF كامل', en: 'Full PPF' },           status: 'confirmed' },
    ],
    analytics: {
      netTrend: [52300, 55800, 58900, 61200, 64800, 68300, 71600, 74375],
      byPackage: [
        { label: { ar: 'نانو سيراميك كامل', en: 'Full nano-ceramic' }, value: 44, color: '#0B1B33' },
        { label: { ar: 'XPEL شراكة', en: 'XPEL partner' }, value: 24, color: '#F0A62B' },
        { label: { ar: 'تظليل أمامي/خلفي', en: 'Front/rear tint' }, value: 21, color: '#1E7AE0' },
        { label: { ar: 'باقة VIP', en: 'VIP bundle' }, value: 11, color: '#7B4FD1' },
      ],
      // rows = Sat..Fri, cols = 10:00..21:00
      hoursHeat: [
        [2, 3, 4, 3, 2, 1, 2, 4, 5, 6, 4, 2],
        [1, 2, 3, 3, 2, 1, 2, 3, 4, 5, 3, 1],
        [2, 4, 5, 4, 2, 1, 3, 5, 6, 7, 5, 2],
        [1, 3, 4, 3, 2, 1, 2, 4, 5, 6, 4, 1],
        [2, 3, 4, 4, 2, 1, 3, 4, 6, 7, 5, 2],
        [3, 5, 6, 5, 3, 2, 4, 6, 8, 9, 7, 3],
        [1, 1, 2, 2, 1, 1, 1, 2, 3, 4, 3, 1],
      ],
      payoutHistory: [
        { id: 'PO-3312', period: { ar: 'يونيو 2026', en: 'Jun 2026' }, amount: 61540, status: 'paid', date: '2026-07-05' },
        { id: 'PO-3268', period: { ar: 'مايو 2026', en: 'May 2026' }, amount: 58120, status: 'paid', date: '2026-06-05' },
        { id: 'PO-3199', period: { ar: 'أبريل 2026', en: 'Apr 2026' }, amount: 54300, status: 'paid', date: '2026-05-05' },
        { id: 'PO-3355', period: { ar: 'يوليو 2026', en: 'Jul 2026' }, amount: 68320, status: 'processing', date: '—' },
      ],
    },
    staff: [
      { name: { ar: 'كريم عبدالفتاح', en: 'Kareem Abdelfattah' }, role: { ar: 'فني تظليل أول', en: 'Senior tint tech' }, branch: { ar: 'الروضة', en: 'Rawdah' }, todayJobs: 5, utilization: 86, rating: 4.9 },
      { name: { ar: 'محمود سيد', en: 'Mahmoud Sayed' },          role: { ar: 'فني PPF', en: 'PPF tech' },               branch: { ar: 'الروضة', en: 'Rawdah' }, todayJobs: 3, utilization: 72, rating: 4.7 },
      { name: { ar: 'يوسف طاهر', en: 'Yousef Taher' },           role: { ar: 'فني تلميع', en: 'Detailing tech' },        branch: { ar: 'السلامة', en: 'Salama' }, todayJobs: 4, utilization: 64, rating: 4.6 },
      { name: { ar: 'عبدالله فهمي', en: 'Abdullah Fahmy' },      role: { ar: 'فني تظليل', en: 'Tint tech' },             branch: { ar: 'السلامة', en: 'Salama' }, todayJobs: 2, utilization: 45, rating: 4.5 },
    ],
    offers: [
      { title: { ar: 'خصم 25% على النانو سيراميك', en: '25% off nano ceramic' }, service: 'tinting', discount: 25, until: '2026-08-15', uses: 84, active: true },
      { title: { ar: 'باقة VIP بسعر خاص', en: 'VIP bundle special price' },      service: 'detailing', discount: 15, until: '2026-08-30', uses: 31, active: true },
      { title: { ar: 'PPF أمامي + تظليل مجاني', en: 'Front PPF + free tint' },   service: 'ppf', discount: 0, until: '2026-07-31', uses: 122, active: false },
    ],
  },

  /* ---------- seller ---------- */
  seller: {
    rep: { name: { ar: 'أحمد محمد', en: 'Ahmed Mohammed' }, agency: { ar: 'وكالة الجبر للسيارات', en: 'Aljabr Motors' }, code: 'AHM-4419' },
    wallet: { total: 12450.50, available: 8290.75 },
    stats: { sold: 46, followup: 32, customers: 128 },
    monthlyCommissions: [980, 1240, 1130, 1560, 1720, 1910, 2080, 1830.5],
    byService: [
      { key: 'tinting', value: 42 }, { key: 'ppf', value: 31 },
      { key: 'wash', value: 9 }, { key: 'detailing', value: 18 },
    ],
    carMakes: ['Toyota', 'Lexus', 'Nissan', 'Hyundai', 'Kia', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Land Rover'],
    leads: [
      { code: 'AL-K2M8-11TF', name: { ar: 'عبدالرحمن السلمي', en: 'Abdulrahman Alsulami' }, phone: '0551234901', city: 'jeddah', car: 'Lexus LX600 2024', services: ['tinting', 'ppf'], status: 'sold', commission: 420, date: '2026-07-22' },
      { code: 'AL-P9Q3-88RD', name: { ar: 'ماجد الروقي', en: 'Majed Alruwaili' }, phone: '0553219944', city: 'riyadh', car: 'Toyota Land Cruiser 2025', services: ['ppf'], status: 'contacted', commission: null, date: '2026-07-28' },
      { code: 'AL-W4E1-05MN', name: { ar: 'هاني باعشن', en: 'Hani Baeshen' }, phone: '0559812277', city: 'jeddah', car: 'BMW X7 2023', services: ['detailing'], status: 'sent', commission: null, date: '2026-08-01' },
      { code: 'AL-Z8C5-73JK', name: { ar: 'صالح الغانم', en: 'Saleh Alghanem' }, phone: '0554478120', city: 'riyadh', car: 'Hyundai Palisade 2024', services: ['tinting'], status: 'new', commission: null, date: '2026-08-02' },
      { code: 'AL-N1V6-29GH', name: { ar: 'عمر كتوعة', en: 'Omar Katoua' }, phone: '0556690533', city: 'jeddah', car: 'Kia Telluride 2023', services: ['wash', 'detailing'], status: 'lost', commission: null, date: '2026-07-18' },
      { code: 'AL-B7T2-64SS', name: { ar: 'راكان الحقيل', en: 'Rakan Alhugail' }, phone: '0552208814', city: 'riyadh', car: 'Mercedes GLS 2024', services: ['ppf', 'tinting'], status: 'sold', commission: 610, date: '2026-07-12' },
    ],
    goals: {
      salesTarget: 60, salesNow: 46, bonus: 1500,
      tiers: [
        { at: 30, bonus: 500 }, { at: 45, bonus: 900 }, { at: 60, bonus: 1500 },
      ],
      funnel: [
        { label: { ar: 'عملاء مسجلون', en: 'Leads registered' }, value: 128, color: '#0B1B33' },
        { label: { ar: 'تم التواصل معهم', en: 'Contacted' }, value: 98, color: '#1E7AE0' },
        { label: { ar: 'عرض سعر مُرسل', en: 'Quoted' }, value: 71, color: '#7B4FD1' },
        { label: { ar: 'تم البيع ✓', en: 'Sold ✓' }, value: 46, color: '#1E9E5A' },
      ],
    },
    bank: { name: { ar: 'مصرف الراجحي', en: 'Al Rajhi Bank' }, iban: 'SA03 8000 0000 6080 1016 7519', holder: { ar: 'أحمد محمد', en: 'Ahmed Mohammed' } },
    leaderboard: [
      { name: { ar: 'سلمان الدخيل', en: 'Salman Aldakhil' }, agency: { ar: 'وكالة التوكيلات العالمية', en: 'Universal Motors' }, sales: 61, comm: 16820 },
      { name: { ar: 'أحمد محمد', en: 'Ahmed Mohammed' }, agency: { ar: 'وكالة الجبر للسيارات', en: 'Aljabr Motors' }, sales: 46, comm: 12450.5, me: true },
      { name: { ar: 'فارس العتيق', en: 'Faris Alateeq' }, agency: { ar: 'وكالة الجميح', en: 'Aljomaih Auto' }, sales: 41, comm: 11080 },
      { name: { ar: 'نواف الحمدان', en: 'Nawaf Alhamdan' }, agency: { ar: 'وكالة ساماكو', en: 'Samaco' }, sales: 33, comm: 8960 },
      { name: { ar: 'خالد باجبع', en: 'Khaled Bajaba' }, agency: { ar: 'وكالة الجبر للسيارات', en: 'Aljabr Motors' }, sales: 27, comm: 7110 },
    ],
    priceList: [
      { service: 'tinting', name: { ar: 'تظليل نانو سيراميك كامل', en: 'Full nano-ceramic tint' }, from: 549, comm: { ar: '8%', en: '8%' } },
      { service: 'tinting', name: { ar: 'تظليل حراري أمامي', en: 'Front heat-rejection tint' }, from: 350, comm: { ar: '8%', en: '8%' } },
      { service: 'ppf', name: { ar: 'PPF أمامي (XPEL)', en: 'Front PPF (XPEL)' }, from: 2999, comm: { ar: '10%', en: '10%' } },
      { service: 'ppf', name: { ar: 'PPF كامل (XPEL Ultimate)', en: 'Full PPF (XPEL Ultimate)' }, from: 8500, comm: { ar: '10%', en: '10%' } },
      { service: 'detailing', name: { ar: 'تلميع وتفصيل شامل', en: 'Full detailing' }, from: 640, comm: { ar: '7%', en: '7%' } },
      { service: 'wash', name: { ar: 'باقة غسيل شهرية VIP', en: 'VIP monthly wash bundle' }, from: 299, comm: { ar: '5%', en: '5%' } },
    ],
    commissions: [
      { id: 'CM-2291', lead: 'AL-B7T2-64SS', desc: { ar: 'عمولة بيع — PPF + تظليل', en: 'Sale commission — PPF + tint' }, amount: 610, dir: 'in', date: '2026-07-14' },
      { id: 'CM-2290', lead: 'AL-K2M8-11TF', desc: { ar: 'عمولة بيع — تظليل + PPF', en: 'Sale commission — tint + PPF' }, amount: 420, dir: 'in', date: '2026-07-23' },
      { id: 'WD-0871', lead: '—', desc: { ar: 'سحب إلى الحساب البنكي', en: 'Withdrawal to bank' }, amount: 4000, dir: 'out', date: '2026-07-25' },
      { id: 'CM-2287', lead: 'AL-J3F8-51LM', desc: { ar: 'عمولة بيع — تلميع', en: 'Sale commission — detailing' }, amount: 180, dir: 'in', date: '2026-07-08' },
    ],
  },
};
