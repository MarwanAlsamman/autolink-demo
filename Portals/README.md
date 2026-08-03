# AutoLink — Investor Demo Web Portals

Three fully offline, static demo portals for the AutoLink automotive-services
marketplace (window tinting, PPF, car wash, detailing). Pure HTML + CSS +
vanilla JS — **no backend, no build tools, no internet needed**.

## How to open (for the demo)

Just double-click any of these files — they work straight from disk (`file://`):

| Portal | File | Who it's for |
|---|---|---|
| **Landing** | `index.html` | Start here — links to all 3 portals |
| **Admin** | `admin/index.html` | AutoLink team — full reporting dashboard |
| **Service Provider** | `provider/index.html` | مركز النخبة للتظليل — voucher validation, bookings, earnings |
| **Outsource Seller** | `seller/index.html` | أحمد محمد (وكالة الجبر) — leads & commissions |

**Login:** any username/password works, or press the gold **دخول تجريبي سريع /
Quick demo login** button.

**Language:** the ع / EN toggle in the top bar switches Arabic (RTL) ↔ English
(LTR) everywhere; the choice is remembered.

## Demo script highlights

1. **Admin** → watch KPI cards swap with the week/month/year switcher, approve
   a pending provider application, create a promo code (e.g. `SUMMER20`) and
   see it appear at the top of the list. Also: **العملاء** (searchable,
   sortable customer list — click a customer for details, block/unblock, CSV
   export), **دليل المزودين** (search, suspend/activate) and **المالية
   والتسويات** (approve pending provider payouts).
2. **Provider** → التحقق من القسائم: type `AL-8X7K-92Q1` (valid ✓). Both
   starting **and completing** a service require a client OTP — **the demo
   code is always `0000`** (same as the mobile app). Flow: send OTP → enter
   `0000` → start service → send completion OTP → enter `0000` → payout added.
   Also try `AL-USED-0001` (already used ⚠) and `AL-EXP-0001` (expired ✕),
   or the **Scan QR** button → *simulate scan*.
   In **الحجوزات**, click any booking row — or switch to the **Outlook-style
   week calendar** (تقويم أسبوعي toggle) and click an appointment — to run the
   same OTP-gated start/complete flow. Accept/decline the two new
   reservations, check technicians' load, publish an offer, edit a package
   price, reply to a review.
3. **Seller** → تسجيل عميل جديد: fill the form, pick services, submit → a
   tracking code like `AL-XXXX-XXXX` is generated and the lead appears in
   **My Leads** with a status timeline (click any row). Also: **قائمة
   الأسعار** (quote customers + your commission %) and **لوحة المتصدرين**
   (rep leaderboard — you're #2 🥈).

## Financial screens

- **Admin → التقارير المالية**: GMV area chart, commissions-by-service stacked
  bars, bookings-target gauge, P&L summary, refunds log with **CSV export**.
- **Provider → التحليلات المالية**: net-revenue trend, revenue-by-package
  donut, busiest-hours heatmap, AutoLink payout history (CSV export).
- **Seller → أهدافي وعمولاتي**: sales-target gauge with bonus tiers,
  lead→sale conversion funnel, monthly commissions chart, payout bank card
  (copy IBAN), commissions CSV export.

## Notes

- All data is fake and seeded in `shared/data.js` (bilingual AR/EN).
- Interactive actions update the page **in memory** — refreshing resets the
  demo to its seeded state (only the language choice and demo login persist,
  via `localStorage`).
- Charts are hand-drawn inline SVG — no libraries, nothing loaded at runtime.
- Design system (`shared/style.css`) mirrors the mobile app exactly: navy
  `#0B1B33`, gold `#F0A62B`, Cairo font (bundled in `shared/fonts/`), RTL-first
  with the sidebar on the right.
