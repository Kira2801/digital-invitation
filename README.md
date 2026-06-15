# Undangan Digital — Multi-Theme Edition

Sistem React untuk membangun **banyak template undangan digital** dalam **satu
codebase**, dengan shared components, mock data terpusat, dan playground
preview tanpa backend.

## 🚀 Menjalankan Project

```bash
npm install
npm run dev
```

Buka browser → akan muncul **Playground** dengan dropdown pemilih theme di
bagian atas. Saat ini baru ada **1 theme: `elegant`**, tapi struktur sudah
siap untuk menambahkan puluhan theme lain.

Untuk build production (akan merender theme yang diset di `ACTIVE_THEME`
pada `src/App.jsx`):

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Folder

```
src/
├── main.jsx                 # entry: dev → Playground, prod → App
├── App.jsx                  # render 1 theme aktif (ACTIVE_THEME)
├── index.css                # base reset + tailwind (theme-agnostic)
├── App.css                   # app-level utility styles
│
├── mock/
│   └── invitationData.js    # 🔑 SEMUA konten (nama, tanggal, cerita, gift, dst)
│
├── hooks/
│   ├── useParallax.js        # useParallax, useInView, useCountdown
│   └── useInvitationFlow.js  # state machine envelope→cover→open + scrollspy
│
├── components/               # SHARED, dipakai lintas-theme
│   ├── Button/
│   ├── SectionHeading/
│   ├── Countdown/
│   ├── MusicPlayer/
│   ├── NavDots/
│   ├── Modal/                # baru — untuk lightbox/dialog ke depan
│   ├── Gallery/              # baru — grid foto + lightbox ke depan
│   ├── RSVP/                 # RSVPForm, FormField, SuccessState
│   └── cards/                # EventCard, GiftCard, WishCard, ColorSwatch
│
├── themes/
│   ├── index.js              # 🔑 THEME REGISTRY — daftarkan theme baru di sini
│   └── elegant/
│       ├── Theme.jsx         # composition root (menyusun section)
│       ├── theme.css         # design tokens elegant (gold/cream/shimmer)
│       └── sections/
│           ├── Envelope.jsx
│           ├── HeroBackground.jsx
│           ├── Hero.jsx
│           ├── Couple.jsx
│           ├── Countdown.jsx
│           ├── Event.jsx
│           ├── LoveStory.jsx
│           ├── Gift.jsx
│           ├── RSVP.jsx
│           ├── Wishes.jsx
│           └── Footer.jsx
│
└── playground/
    └── ThemePreview.jsx       # dropdown selector untuk dev preview
```

---

## ➕ Menambah Template Baru

1. Duplikasi `src/themes/elegant/` → `src/themes/<nama-theme>/`
2. Ganti palet warna & font di `theme.css`, scoping semua class di bawah
   `.theme-<nama-theme>` (lihat contoh di `elegant/theme.css`)
3. Sesuaikan/ganti isi `sections/*.jsx` sesuai desain baru — boleh pakai
   komponen dari `src/components/` (Button, Countdown, MusicPlayer, NavDots,
   RSVPForm, EventCard, GiftCard, WishCard, dst) agar tidak menulis ulang
   logic yang sama.
4. Daftarkan di `src/themes/index.js`:
   ```js
   import MyTheme from './my-theme/Theme';
   const themes = {
     elegant: { ... },
     'my-theme': { name: 'My Theme', description: '...', component: MyTheme },
   };
   ```
5. Otomatis muncul di dropdown Playground. Untuk deploy, ubah
   `ACTIVE_THEME` di `src/App.jsx`.

Semua theme menerima props yang **sama**: `{ data }` dari
`src/mock/invitationData.js`. Tidak ada data konten yang hardcode di dalam
section/component — semua lewat props.

---

## 🔧 Tech Stack (tidak berubah dari project asli)

- React 18 + Vite
- Tailwind CSS 3 (utility classes) + custom CSS per-theme
- Tidak ada backend/database — semua data dari `mock/invitationData.js`

---

## 📝 Mengganti Isi Undangan

Edit **satu file saja**: `src/mock/invitationData.js`. Semua section
(Hero, Couple, Countdown, Event, LoveStory, Gift, RSVP, Wishes, Footer)
otomatis menampilkan data baru — tidak perlu menyentuh komponen apapun.
