/**
 * mock/invitationData.js
 * ----------------------
 * Single source of truth for ALL invitation content (names, dates, addresses,
 * stories, gift accounts, wishes, etc).
 *
 * Every theme/section component receives this data via props — NO content
 * should ever be hardcoded inside a theme/section/component file.
 *
 * Later this can be swapped per-guest, fetched from an API/CMS, or generated
 * per-template without touching any component code.
 */

const invitationData = {
  // ── Meta ────────────────────────────────────────────────────────────────
  meta: {
    title: 'Undangan Pernikahan - Lulu & Alex',
    description: 'Kami mengundang Anda untuk merayakan hari bahagia kami',
  },

  // ── Core wedding date (single source of truth) ────────────────────────────
  // Drives Cover, Countdown, Event Details default, and Footer.
  weddingDate: '2026-08-17T18:30:00',

  // ── Couple ──────────────────────────────────────────────────────────────
  couple: {
    bride: {
      shortName: 'Lulu',
      fullName: 'Lulu Luthfiyah',
      childPosition: 'First Daughter of',
      parents: 'Mr. Ahmad & Mrs. Sari',
      sealInitial: 'L',
      // Optional portrait used by themes with a photo hero (e.g. "lavender")
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop&q=80',
      instagram: '@lulu.luthfiyahh',
    },
    groom: {
      shortName: 'Alex',
      fullName: 'Alexander Rizky',
      childPosition: 'First Son of',
      parents: 'Mr. Hendra & Mrs. Dewi',
      // Optional portrait used by themes with a photo hero (e.g. "lavender")
      photo: 'https://images.unsplash.com/photo-1500648767791-00d5a4ee9bb3?w=600&h=750&fit=crop&q=80',
      instagram: '@alexander_rizkyy',
    },
  },

  // Shared hashtag used in RSVP success state & footer
  hashtag: '#ALEXmeLULUhkanhatikekasih',

  // ── Hero / Cover ────────────────────────────────────────────────────────
  hero: {
    eyebrow: "We're Getting Married",
  },

  // ── Envelope (opening overlay) ─────────────────────────────────────────
  envelope: {
    dearLabel: 'Dear,',
    heading: 'A Special Invitation Awaits You',
    sealInitial: 'L',
    buttonLabel: 'OPEN INVITATION ✉',
  },

  // ── Opening / Bride & Groom section ───────────────────────────────────
  opening: {
    verse: {
      text: `Pada akhirnya
            aku tertawa lepas
            di atas perahu berlubang
            yang akan tenggelam,

            mengingat kamu adalah lautan.
            
            - Alexander Rizky -`,
    },
    heading: 'Bride & Groom',
    blessing: 'With the blessings of Allah SWT,',
    invitation:
      "we begin our new chapter with love and grateful hearts. It would be our joy and honor to invite you to celebrate this special day with us.",
  },

  // ── Event details ──────────────────────────────────────────────────────
  events: [
    {
      id: 'akad',
      type: 'Marriage Ceremony',
      icon: '🕌',
      date: 'Saturday, June 14, 2025',
      time: '08.00 WIB - Selesai',
      venue: 'The Grand Ballroom - Hotel Mulia',
      address: 'Jl. Asia Afrika, Senayan, Jakarta Pusat 10270',
      mapsUrl: 'https://maps.google.com',
    },
    {
      id: 'resepsi',
      type: 'Wedding Reception',
      icon: '🥂',
      date: 'Saturday, June 14, 2025',
      time: '11.00 – 14.00 WIB',
      venue: 'The Grand Ballroom - Hotel Mulia',
      address: 'Jl. Asia Afrika, Senayan, Jakarta Pusat 10270',
      mapsUrl: 'https://maps.google.com',
    },
  ],

  // ── Dress code ──────────────────────────────────────────────────────────
  dressCode: {
    title: 'Dress Code',
    description:
      "Let’s fill the day with neutral colors to complement our wedding theme.",
    colors: [
      { color: '#c8a96e', label: 'Gold' },
      { color: '#d4b896', label: 'Champagne' },
      { color: '#8b7355', label: 'Brown' },
      { color: '#f5ebe0', label: 'Cream' },
    ],
    note: 'but any color is welcome except white and gray.',
  },

  // ── Gallery ─────────────────────────────────────────────────────────────
  // Used by themes that include a photo gallery section (e.g. "lavender").
  gallery: {
    heading: 'Our Moments',
    subheading: 'A few favorite frames from our journey together',
    photos: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop&q=80', alt: 'Couple photo 1' },
      { src: 'https://images.unsplash.com/photo-1525258946800-98cfd641fa0f?w=500&h=500&fit=crop&q=80', alt: 'Couple photo 2' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&h=500&fit=crop&q=80', alt: 'Couple photo 3' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop&q=80', alt: 'Couple photo 4' },
      { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&h=500&fit=crop&q=80', alt: 'Couple photo 5' },
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=500&fit=crop&q=80', alt: 'Couple photo 6' },
    ],
  },

  // ── Love story timeline ─────────────────────────────────────────────────
  loveStory: [
    {
      startYear: '2016',
      endYear: '2019',
      title: 'First Phase',
      desc: 'Bermula dari percakapan sederhana dua anak remaja yang senang bercengkrama. Tumbuh rasa kagum satu sama lain, yang hanya disiratkan lewat bait-bait puisi yang tertulis.',
      emoji: '👀',
    },
    {
      startYear: '2020',
      endYear: '2024',
      title: 'Second Phase',
      desc: 'Waktu membawa untuk mengarungi luas bentang lautan. Masing-masing memilih jalur yang berbeda. Ombak hadir tanpa permisi teriring harapan dan ego yang saling menyeruak bersamaan. Pergumulan hati dimulai. Jelas terombang-ambing. Ragu pernah menjadi bayang. Karena ditaruh di antara beberapa pilihan.',
      emoji: '🤝',
    },
    {
      startYear: '2024',
      endYear: '2026',
      title: 'Third Phase',
      desc: 'Perihal mencintai, bahkan lebih dari itu seluruhnya bukan perkara kebal, jauh dari kata mudah dan asal. Perahu yang berbeda nyatanya tidak pernah benar-benar kehilangan arah tujuan. Membaca arah, belajar, bertumbuh, dan saling menggenggam. Hingga akhirnya, memilih berlayar dalam satu perahu menuju muara kebahagiaan abadi bersama-Nya.',
      emoji: '💌',
    },
  ],
  loveStoryQuote:
    '"Dan akhirnya, dua jiwa yang berjalan sendiri-sendiri kini melangkah bersama selamanya."',

  // ── Wedding gift ────────────────────────────────────────────────────────
  gift: {
    intro: `Your blessings mean the world to us, 
            and your presence on our special day is the greatest gift of all.
            

            If you wish to share your love in another way,
            we would be truly grateful, as it would add to our happiness ♡
            `,
    accounts: [
      {
        id: 'bri',
        type: 'Transfer Bank',
        icon: '🏦',
        bank: 'Bank BRI',
        accountNumber: '1234-5678-9012-3456',
        accountName: 'Lulu Fatimah Azzahra',
        color: '#1e6bb8',
      },
      {
        id: 'bca',
        type: 'Transfer Bank',
        icon: '🏦',
        bank: 'Bank BCA',
        accountNumber: '0987-6543-2101',
        accountName: 'Alexander Ramadhan',
        color: '#005baa',
      },
      {
        id: 'gopay',
        type: 'E-Wallet',
        icon: '📱',
        bank: 'GoPay',
        accountNumber: '0812-3456-7890',
        accountName: 'Lulu Fatimah',
        color: '#00a651',
      },
      {
        id: 'ovo',
        type: 'E-Wallet',
        icon: '💜',
        bank: 'OVO',
        accountNumber: '0812-3456-7890',
        accountName: 'Lulu Fatimah',
        color: '#4c2a86',
      },
    ],
    physicalGiftAddress: 'Jl. Melati Raya No. 8, Kebayoran Baru,\nJakarta Selatan 12180',
  },

  // ── RSVP ────────────────────────────────────────────────────────────────
  rsvp: {
    intro: 'Please RSVP to confirm your attendance at our wedding celebration.',
  },

  // ── Wishes / comments ──────────────────────────────────────────────────
  wishes: [
    {
      id: 1,
      name: 'Budi Santoso',
      attendance: 'Attending',
      wish: 'Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma wa baraka alaikuma.',
      time: '2 hari lalu',
    },
    {
      id: 2,
      name: 'Ratna Dewi',
      attendance: 'Attending',
      wish: 'Alhamdulillah, akhirnya kalian sah juga! Semoga langgeng sampai kakek nenek ya 😍',
      time: '3 hari lalu',
    },
    {
      id: 3,
      name: 'Hendra Wijaya',
      attendance: 'Not Attending',
      wish: 'Maaf tidak bisa hadir. Tapi doa saya selalu menyertai kalian. Selamat menempuh hidup baru!',
      time: '4 hari lalu',
    },
    {
      id: 4,
      name: 'Sari Indah',
      attendance: 'Attending',
      wish: 'Semoga pernikahan ini penuh berkah, cinta, dan kebahagiaan yang abadi. Barakallah fii kuma! 🌸',
      time: '5 hari lalu',
    },
  ],

  // ── Footer ──────────────────────────────────────────────────────────────
  footer: {
    label: 'With Love,,',
    closingNames: 'Lulu & Alex',
    quote:
      '"Cinta bukan tentang menemukan orang yang sempurna, melainkan melihat orang yang tidak sempurna dengan cara yang sempurna."',
    location: 'Jakarta, Indonesia',
    credit: 'Made with ❤ — LEXRA Wedding Invitation',
  },

  // ── Background music ───────────────────────────────────────────────────
  music: {
    // Replace with your own hosted audio file in /public for production
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'A Thousand Years',
    tip: '🎵 Putar musik untuk pengalaman lebih indah',
  },
};

export default invitationData;
