export const invitationData = {
  couple: {
    groom: {
      name: "Alexander James",
      fullName: "Alexander James Williamson",
      description: "The groom",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      instagram: "@alexjames",
      facebook: "alexjames"
    },
    bride: {
      name: "Lulu Marie",
      fullName: "Lulu Marie Anderson",
      description: "The bride",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      instagram: "@lulumarie",
      facebook: "lulumarie"
    }
  },
  event: {
    date: "2024-12-25T10:00:00",
    ceremony: {
      name: "Wedding Ceremony",
      time: "10:00 AM",
      location: "St. Mary's Cathedral",
      address: "123 Church Street, New York, NY 10001",
      mapUrl: "https://maps.google.com/?q=St+Mary's+Cathedral+New+York"
    },
    reception: {
      name: "Wedding Reception",
      time: "02:00 PM",
      location: "The Grand Ballroom",
      address: "456 Park Avenue, New York, NY 10002",
      mapUrl: "https://maps.google.com/?q=The+Grand+Ballroom+New+York"
    }
  },
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      alt: "Couple photo 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=800&h=600&fit=crop",
      alt: "Couple photo 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522673607200-1645062cd958?w=800&h=600&fit=crop",
      alt: "Couple photo 3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=600&fit=crop",
      alt: "Couple photo 4"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b4b0c1?w=800&h=600&fit=crop",
      alt: "Couple photo 5"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=800&h=600&fit=crop",
      alt: "Couple photo 6"
    }
  ],
  story: [
    {
      id: 1,
      title: "First Meeting",
      date: "June 2020",
      description: "We met at a coffee shop in downtown Manhattan. It was love at first sight."
    },
    {
      id: 2,
      title: "First Date",
      date: "July 2020",
      description: "Our first date was at a beautiful rooftop restaurant overlooking the city."
    },
    {
      id: 3,
      title: "The Proposal",
      date: "December 2023",
      description: "He proposed during a romantic sunset walk on the beach. She said yes!"
    }
  ],
  rsvp: {
    enabled: true,
    deadline: "2024-12-01",
    message: "Please confirm your attendance by December 1st, 2024"
  },
  gifts: [
    {
      id: 1,
      bankName: "Chase Bank",
      accountNumber: "1234567890",
      accountHolder: "Alexander & Lulu Williamson",
      swift: "CHASUS33"
    },
    {
      id: 2,
      bankName: "Bank of America",
      accountNumber: "0987654321",
      accountHolder: "Alexander & Lulu Williamson",
      swift: "BOFAUS3N"
    }
  ],
  quote: {
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    source: "1 Corinthians 13:4"
  },
  closing: {
    message: "Thank you for being part of our special day",
    signature: "With love, Alexander & Lulu"
  },
  music: {
    src: "/audio/wedding-music.mp3",
    title: "Our Wedding Song",
    artist: "Romantic Melodies"
  }
};

export default invitationData;
