export interface InvitationData {
  meta: MetaData;
  hero: HeroSection;
  quote: QuoteSection;
  bride: Person;
  groom: Person;
  story: StoryItem[];
  events: EventItem[];
  countdown: CountdownData;
  gallery: GalleryItem[];
  gifts: GiftItem[];
  rsvp: RSVPData;
  closing: ClosingData;
  music: MusicData;
}

export interface MetaData {
  groomName: string;
  brideName: string;
  title: string;
  date: string;
  location: string;
}

export interface HeroSection {
  backgroundImage: string;
  overlayColor: string;
  coupleNames: {
    first: string;
    second: string;
    ampersand: string;
  };
  weddingDate: string;
  subtitle: string;
}

export interface QuoteSection {
  text: string;
  source: string;
  backgroundImage: string;
}

export interface Person {
  name: string;
  fullName: string;
  description: string;
  image: string;
  instagram: string;
  fatherName: string;
}

export interface StoryItem {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapUrl: string;
  dresscode: string;
  type: 'ceremony' | 'reception';
}

export interface CountdownData {
  targetDate: string;
  message: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface GiftItem {
  id: number;
  bankName: string;
  accountNumber: string;
  accountName: string;
  type: string;
}

export interface RSVPData {
  title: string;
  subtitle: string;
  deadline: string;
  formAction: string;
}

export interface ClosingData {
  message: string;
  signature: string;
  backgroundImage: string;
}

export interface MusicData {
  src: string;
  title: string;
}
