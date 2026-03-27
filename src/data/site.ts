// ============================================================
// GASTRO|nome — Site Configuration
// ============================================================

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  url: string;
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  social: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
  };
  booking: string;
  orderOnline: string;
  giftCards: string;
  hours: OpeningHours[];
  stats: {
    rating: string;
    totalReviews: string;
    ranking: string;
    awards: string[];
    yearEstablished: string;
  };
  nav: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'GASTRO|nome',
  fullName: 'GASTROnome Mat & Bar',
  tagline: 'En oförglömlig upplevelse',
  description:
    'Restaurangen med det lilla extra. Italiensk-svensk fusion i hjärtat av Lund. Vinnare av Pizza SM 2023 & 2024.',
  url: 'https://gastronome.se',
  address: {
    street: 'Bangatan 6',
    zip: '222 21',
    city: 'Lund',
    country: 'Sverige',
  },
  phone: '046-390000',
  email: 'info@gastronome.se',
  social: {
    facebook: 'https://www.facebook.com/GASTROnomeLUND',
    instagram: 'https://www.instagram.com/gastronomelund',
    tripadvisor:
      'https://www.tripadvisor.com/Restaurant_Review-g189838-d21511925-Reviews-GASTRO_nome_Mat_Bar-Lund_Skane_County.html',
  },
  booking: 'https://gastronome.se/boka-bord',
  orderOnline: 'https://eatsmart.se/gastronome',
  giftCards: 'https://gastronome.se/presentkort',
  hours: [
    { day: 'Måndag', hours: 'Stängt' },
    { day: 'Tisdag', hours: '17:00–22:00' },
    { day: 'Onsdag', hours: '17:00–23:00' },
    { day: 'Torsdag', hours: '17:00–23:00' },
    { day: 'Fredag', hours: '15:00–00:00' },
    { day: 'Lördag', hours: '15:00–00:00' },
    { day: 'Söndag', hours: '15:00–22:00' },
  ],
  stats: {
    rating: '4.8',
    totalReviews: '884',
    ranking: '#1 av 265 restauranger i Lund',
    awards: ['Pizza SM 2023', 'Pizza SM 2024', "Travellers' Choice 2025"],
    yearEstablished: '2009',
  },
  nav: [
    { label: 'Hem', href: '/' },
    { label: 'Evenemang', href: '/evenemang' },
    { label: 'Menyer', href: '/menyer' },
    { label: 'Boka Bord', href: '/boka-bord' },
    { label: 'Presentkort', href: '/presentkort' },
    { label: 'Stora Sällskap', href: '/stora-sallskap' },
    { label: 'Beställ Online', href: '/bestall-online' },
  ],
};
