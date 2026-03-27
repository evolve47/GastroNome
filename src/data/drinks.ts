// ============================================================
// GASTRO|nome — Full Drinks Menu Data (Bilingual SV/EN)
// ============================================================

export interface DrinkItem {
  name: string;
  nameEn?: string;
  price: string;
  volume?: string;
  note?: string;
  noteEn?: string;
  region?: string;
  regionEn?: string;
  abv?: string;
}

export interface DrinkCategory {
  id: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  items: DrinkItem[];
}

export const drinks: DrinkCategory[] = [
  // ─── FATÖL (Draft Beer) ──────────────────────────────────
  {
    id: 'fatol',
    title: 'Fatöl',
    titleEn: 'Draft Beer',
    items: [
      { name: 'Angelo Poretti', price: '89' },
      { name: 'Falcon', price: '85' },
      { name: 'Staropramen', price: '89' },
      { name: 'Brooklyn Lager', price: '89' },
      { name: 'Eriksberg Karaktär', price: '89' },
      { name: 'Brooklyn IPA', price: '98' },
      { name: '1664 Blanc', price: '89' },
      { name: '100W IPA', price: '98' },
      { name: 'Guinness', price: '105', volume: '50cl' },
      { name: 'Neon IPA', price: '98' },
      {
        name: 'Brooklyn Special Effect',
        price: '76',
        abv: '0.5%',
        note: 'Alkoholfri',
        noteEn: 'Non-alcoholic',
      },
    ],
  },

  // ─── FLASKÖL (Bottled Beer) ──────────────────────────────
  {
    id: 'flaskol',
    title: 'Flasköl',
    titleEn: 'Bottled Beer',
    items: [
      { name: 'Birra Moretti', price: '85' },
      { name: 'Peroni Gran Riserva Bianca', price: '89' },
      { name: 'Peroni Gran Riserva Doppio Malto', price: '96' },
      { name: 'Peroni Gran Riserva Rossa', price: '89' },
      { name: 'Eriksberg', price: '89', volume: '50cl' },
      { name: 'Erdinger Weissbier Hefe', price: '105', volume: '50cl' },
      { name: 'Estrella Galicia', price: '85', note: 'Glutenfri', noteEn: 'Gluten-free' },
      { name: 'Bernard Dark Lager', price: '119', volume: '50cl' },
      { name: 'Corona', price: '79' },
    ],
  },

  // ─── CIDER ───────────────────────────────────────────────
  {
    id: 'cider',
    title: 'Cider',
    items: [
      { name: 'Galipette Äpple Brut', nameEn: 'Galipette Apple Brut', price: '96' },
      { name: 'Galipette Rosé', price: '96' },
    ],
  },

  // ─── BUBBEL ──────────────────────────────────────────────
  {
    id: 'bubbel',
    title: 'Bubbel',
    titleEn: 'Sparkling Wine',
    items: [
      { name: 'Martini Prosecco', price: '119/535' },
      {
        name: 'Tenuta Barbon Prosecco Brut 2022',
        price: '129/585',
        region: 'Treviso',
      },
      {
        name: 'Biscardo Rosé Prosecco Millesimato 2022',
        price: '585',
        region: 'Valpolicella',
      },
      {
        name: 'Louis Bouillot Crémant',
        price: '675',
        region: 'Bourgogne',
      },
      {
        name: 'Bollinger Special Brut',
        price: '1295',
        region: 'Champagne',
      },
    ],
  },

  // ─── RÖTT VIN ────────────────────────────────────────────
  {
    id: 'rott-vin',
    title: 'Rött Vin',
    titleEn: 'Red Wine',
    items: [
      {
        name: 'Biscardo Ripasso Superiore DOC',
        price: '125/525',
        region: 'Veneto',
      },
      {
        name: 'Cannonau Costera DOC',
        price: '139/565',
        region: 'Sardinien',
        regionEn: 'Sardinia',
      },
      {
        name: 'Boasso Nebbiolo DOC',
        price: '145/595',
        region: 'Piemonte',
        regionEn: 'Piedmont',
      },
      {
        name: 'Vinsobres Famille Perrin AOC',
        price: '150/625',
        region: 'Rhône',
      },
      {
        name: 'Altemura Sasseo IGT',
        price: '159/675',
        region: 'Apulien',
        regionEn: 'Apulia',
      },
      {
        name: 'Nipozzano Chianti Riserva DOCG',
        price: '165/695',
        region: 'Toscana',
        regionEn: 'Tuscany',
      },
      {
        name: 'Fontanafredda Barolo DOCG',
        price: '925',
        region: 'Piemonte',
        regionEn: 'Piedmont',
      },
      {
        name: 'Caparzo Brunello di Montalcino DOCG',
        price: '1195',
        region: 'Toscana',
        regionEn: 'Tuscany',
      },
      {
        name: 'Château de Beaucastel AOC',
        price: '3295',
        region: 'Châteauneuf du Pape',
      },
      {
        name: 'La Spinetta Barbaresco Gallina DOCG 2008',
        price: '3850',
        region: 'Piemonte',
        regionEn: 'Piedmont',
      },
      {
        name: 'Tommasi De Buris Amarone Riserva DOCG 2008',
        price: '7950',
        region: 'Veneto',
      },
    ],
  },

  // ─── VITT VIN ────────────────────────────────────────────
  {
    id: 'vitt-vin',
    title: 'Vitt Vin',
    titleEn: 'White Wine',
    items: [
      {
        name: 'Vermentino di Gallura DOCG',
        price: '125/525',
        region: 'Sardinien',
        regionEn: 'Sardinia',
      },
      {
        name: 'Leth Grüner Reserve',
        price: '135/535',
        region: 'Wagram',
      },
      {
        name: 'Lergenmüller J L Riesling',
        price: '139/565',
        region: 'Pfalz',
      },
      {
        name: 'Chateau Martinolles Vieilles',
        price: '145/595',
        region: 'Limoux',
      },
      {
        name: 'Grappoli Roero Arneis DOCG',
        price: '150/625',
        region: 'Piemonte',
        regionEn: 'Piedmont',
      },
      {
        name: 'Spinetta Toscana Vermentino',
        price: '675',
        region: 'Toscana',
        regionEn: 'Tuscany',
      },
      {
        name: 'Umani Ronchi Le Busche',
        price: '725',
        region: 'Le Marche',
      },
      {
        name: 'Fourmeaux Chablis 1er Cru',
        price: '985',
        region: 'Bourgogne',
      },
    ],
  },

  // ─── ROSÉ ────────────────────────────────────────────────
  {
    id: 'rose',
    title: 'Rosé',
    items: [
      {
        name: 'Studio by Miraval Rosé',
        price: '145/595',
        region: 'Provence',
      },
    ],
  },

  // ─── ALKOHOLFRITT ────────────────────────────────────────
  {
    id: 'alkoholfritt',
    title: 'Alkoholfritt',
    titleEn: 'Non-Alcoholic',
    items: [
      { name: 'Pepsi', price: '35', note: 'Soft drink' },
      { name: 'Zingo', price: '35', note: 'Soft drink' },
      { name: 'Pepsi Max', price: '35', note: 'Soft drink' },
      {
        name: 'Siciliansk Lemonad — Limonata',
        nameEn: 'Sicilian Lemonade — Limonata',
        price: '59',
      },
      {
        name: 'Siciliansk Lemonad — Aranciata',
        nameEn: 'Sicilian Lemonade — Aranciata',
        price: '59',
      },
      {
        name: 'Siciliansk Lemonad — Rossa',
        nameEn: 'Sicilian Lemonade — Rossa',
        price: '59',
      },
      { name: 'San Pellegrino', price: '39/95' },
      { name: 'Cider 0.5%', price: '79', note: 'Kiviks Musteri' },
      { name: 'Birra Moretti 0.5%', price: '75' },
      { name: 'Ginger Beer 0%', price: '72' },
      { name: 'Nozeco 0.4%', price: '119' },
      { name: 'Redbull', price: '45' },
      {
        name: 'Natureo Rosso',
        price: '95',
        note: 'Rött, 0.5%',
        noteEn: 'Red, 0.5%',
      },
      {
        name: 'Natureo Bianco',
        price: '95',
        note: 'Vitt, 0.5%',
        noteEn: 'White, 0.5%',
      },
      {
        name: 'Isvatten',
        nameEn: 'Ice Water',
        price: '15',
      },
    ],
  },
];
