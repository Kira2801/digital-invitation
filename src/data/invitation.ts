import { InvitationData } from '../types';

export const invitationData: InvitationData = {
  meta: {
    groomName: "Alex",
    brideName: "Lulu",
    title: "Lulu & Alex Wedding Invitation",
    date: "2024-12-20",
    location: "Grand Ballroom, Jakarta"
  },
  hero: {
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    overlayColor: "rgba(0, 0, 0, 0.4)",
    coupleNames: {
      first: "Lulu",
      second: "Alex",
      ampersand: "&"
    },
    weddingDate: "December 20, 2024",
    subtitle: "We're Getting Married"
  },
  quote: {
    text: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
    source: "Ar-Rum: 21",
    backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1920&q=80"
  },
  bride: {
    name: "Lulu Amanda Putri",
    fullName: "Lulu Amanda Putri, S.Kom",
    description: "The beautiful bride",
    image: "https://images.unsplash.com/photo-1596450519634-8e920bb0f4a5?w=800&q=80",
    instagram: "@luluamanda",
    fatherName: "Mr. Ibrahim & Mrs. Sarah"
  },
  groom: {
    name: "Alexander Wijaya",
    fullName: "Alexander Wijaya, S.T",
    description: "The handsome groom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    instagram: "@alexwijaya",
    fatherName: "Mr. Wijaya & Mrs. Linda"
  },
  story: [
    {
      id: 1,
      title: "First Meeting",
      date: "January 2020",
      description: "We met at a mutual friend's gathering. It was love at first sight.",
      icon: "heart"
    },
    {
      id: 2,
      title: "First Date",
      date: "March 2020",
      description: "Our first coffee date turned into hours of conversation.",
      icon: "coffee"
    },
    {
      id: 3,
      title: "Proposal",
      date: "December 2023",
      description: "He proposed under the stars on our favorite beach.",
      icon: "ring"
    }
  ],
  events: [
    {
      id: 1,
      title: "Akad Nikah",
      date: "Friday, December 20, 2024",
      time: "08:00 AM - 10:00 AM",
      location: "Masjid Agung Al-Azhar",
      address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
      mapUrl: "https://maps.google.com/?q=Masjid+Agung+Al-Azhar+Jakarta",
      dresscode: "Muslim Formal",
      type: "ceremony"
    },
    {
      id: 2,
      title: "Wedding Reception",
      date: "Friday, December 20, 2024",
      time: "11:00 AM - 02:00 PM",
      location: "Grand Ballroom Hotel Mulia",
      address: "Jl. Asia Afrika, Gelora, Jakarta Pusat",
      mapUrl: "https://maps.google.com/?q=Hotel+Mulia+Jakarta",
      dresscode: "Formal Attire",
      type: "reception"
    }
  ],
  countdown: {
    targetDate: "2024-12-20T08:00:00",
    message: "Countdown to Our Special Day"
  },
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      alt: "Couple photo 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511285560982-1356c11d4606?w=800&q=80",
      alt: "Couple photo 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522673607200-1645062cd958?w=800&q=80",
      alt: "Couple photo 3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      alt: "Couple photo 4"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
      alt: "Couple photo 5"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=800&q=80",
      alt: "Couple photo 6"
    }
  ],
  gifts: [
    {
      id: 1,
      bankName: "BCA",
      accountNumber: "1234567890",
      accountName: "Lulu Amanda Putri",
      type: "bank_transfer"
    },
    {
      id: 2,
      bankName: "Mandiri",
      accountNumber: "9876543210",
      accountName: "Alexander Wijaya",
      type: "bank_transfer"
    }
  ],
  rsvp: {
    title: "RSVP",
    subtitle: "Please confirm your attendance",
    deadline: "December 10, 2024",
    formAction: "https://formsubmit.co/your-email@example.com"
  },
  closing: {
    message: "We look forward to celebrating with you!",
    signature: "Lulu & Alex",
    backgroundImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
  },
  music: {
    src: "/audio/wedding-music.mp3",
    title: "Perfect - Ed Sheeran"
  }
};
