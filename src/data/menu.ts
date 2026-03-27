// ============================================================
// GASTRO|nome — Full À La Carte Menu Data
// ============================================================

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: ('vegetarian' | 'vegan' | 'glutenFreeOption' | 'veganOption' | 'award')[];
  award?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  // ─── ANTIPASTI ───────────────────────────────────────────
  {
    id: 'antipasti',
    title: 'Antipasti',
    items: [
      {
        name: 'Prosciutto di Parma BEDOGNI',
        description: 'Aromatisk och saftig lufttorkad skinka, lagrad i 24 månader',
        price: '129',
      },
      {
        name: 'Mortadella Chiara IGP',
        description: 'Krämig chark med toner av pistagenöt',
        price: '85',
      },
      {
        name: 'Salame Felino IGP',
        description: 'Lufttorkad italiensk salami från Parmaregionen',
        price: '115',
      },
      {
        name: 'Parmigiano Reggiano DOP',
        description: '30 månaders lagrad parmesan av opastöriserad mjölk',
        price: '98',
      },
      {
        name: 'Pane Grigliato',
        description: 'Grillat surdegsbröd med extra virgin olivolja',
        price: '75',
        tags: ['vegetarian', 'vegan'],
      },
      {
        name: 'Arancini',
        description: 'Friterade risottobullar med parmesan på tomatsås',
        price: '96',
      },
      {
        name: 'Nocellara Oliver',
        description: 'Gröna sicilianska oliver',
        price: '89',
        tags: ['vegetarian', 'vegan'],
      },
      {
        name: 'Carciofi Fritti',
        description: 'Friterade kronärtskockor med basilikakräm',
        price: '89',
        tags: ['vegetarian'],
      },
      {
        name: 'Burrata',
        description: 'Krämig ost med olivolja, peppar, salt och basilika',
        price: '109',
        tags: ['vegetarian'],
      },
      {
        name: 'Italian Fries',
        description: 'Krispiga pommes med Parmigiano, örter, vitlök och peppar',
        price: '96',
      },
      {
        name: 'Vitlöksbröd',
        description: 'Surdeg med mozzarella, örter och aioli',
        price: '89',
        tags: ['vegetarian', 'veganOption'],
      },
      {
        name: 'Kålsallad',
        description: 'Kålsallad med Parmigiano, olivolja och peppar',
        price: '79',
        tags: ['vegetarian', 'veganOption'],
      },
    ],
  },

  // ─── FÖRRÄTTER ───────────────────────────────────────────
  {
    id: 'forratrer',
    title: 'Förrätter',
    items: [
      {
        name: 'Sotad Carpaccio',
        description:
          'Sotad nötkötts-carpaccio med pinjenötter, pesto, tryffelolja, lagrad parmesan, tomater och vattenkrasse',
        price: '169',
      },
      {
        name: 'Insalata Caprese',
        description:
          'Italiensk tomatsallad med buffel-mozzarella, basilika, olivolja, balsamico och peppar',
        price: '125',
        tags: ['vegetarian'],
      },
      {
        name: 'Gambretti',
        description: 'Grillad röd räka med chili, vitlök, örter, aioli och surdegsbröd',
        price: '189',
      },
      {
        name: 'Wagyu Biff A5 BMS 9+',
        description: 'Japanskt Wagyu-kött med fantastisk marmorering, 75g eller 150g',
        price: '482/850',
      },
    ],
  },

  // ─── FLATBREAD ───────────────────────────────────────────
  {
    id: 'flatbread',
    title: 'Flatbread',
    subtitle: 'Lyxiga surdegsbakade varianter — perfekt som förrätt eller till drinken',
    note: 'Glutenfri botten +39 kr | Veganskt alternativ +25 kr',
    items: [
      {
        name: 'Tryffel Bianco',
        description:
          'Tryffelkräm, svamp, Parmigiano, ruccola och färsk italiensk tryffel',
        price: '225',
        tags: ['vegetarian'],
      },
      {
        name: 'Chèvre Fichi',
        description:
          'Honungsglaserad getost, valnötter, Philadelphiakräm, Parmigiano, ruccola och fikon',
        price: '235',
        tags: ['vegetarian'],
      },
      {
        name: 'Löjroms Heaven',
        description:
          'Philadelphiakräm, löjrom, crème fraîche, gräslök, dill och citron',
        price: '259',
      },
    ],
  },

  // ─── GOURMET PIZZA ───────────────────────────────────────
  {
    id: 'gourmet-pizza',
    title: 'Gourmet Pizza',
    subtitle: 'Vinnare av Pizza SM 2023 & 2024',
    note: 'Glutenfri botten +39 kr | Veganskt alternativ +20 kr',
    items: [
      {
        name: 'Margherita',
        description:
          'Tomatsås, fior di latte mozzarella, Parmigiano, rostade tomater och basilika',
        price: '175',
        tags: ['vegetarian', 'veganOption'],
      },
      {
        name: 'Paradisiaca Parma',
        description:
          'Tomatsås, mozzarella, Prosciutto di Parma, ruccola, Parmigiano, olivolja och peppar',
        price: '239',
      },
      {
        name: 'Diavola Piccante',
        description:
          "Tomatsås, N'duja, salami, burrata, örtolija, tomater, Parmigiano, peppar och basilika",
        price: '245',
      },
      {
        name: 'Äkta Capricciosa',
        description:
          'Tomatsås, mozzarella, prosciutto, svamp, oliver, kronärtskocka, Parmigiano och basilika',
        price: '239',
      },
      {
        name: 'Burrata',
        description:
          'Mozzarella, mortadella, burrata, pistaschmandel, Parmigiano, olivolja, peppar och basilika',
        price: '245',
      },
      {
        name: 'Estate Caprese',
        description:
          'Tomatsås, buffel-mozzarella, cocktailtomater, spenat, Parmigiano och balsamico',
        price: '235',
        tags: ['vegetarian', 'veganOption'],
      },
      {
        name: 'Filetto alla GASTRO',
        description:
          'Sotad biff, pestokräm, knaprig lök, rostade tomater, Parmigiano, ruccola och nötter',
        price: '279',
        tags: ['award'],
        award: '1:a plats Pizza SM 2024',
      },
      {
        name: 'Cavolo Meraviglioso',
        description:
          'Mozzarella, Taleggio, skivad potatis, friterad grönkål, tryffelolja, Parmigiano och färsk tryffel',
        price: '259',
        tags: ['vegetarian', 'award'],
        award: '1:a plats Pizza SM 2023',
      },
    ],
  },

  // ─── HUVUDRÄTTER ─────────────────────────────────────────
  {
    id: 'huvudratter',
    title: 'Huvudrätter',
    items: [
      {
        name: 'Pepparbiff',
        description:
          'Oxfilé rullad i fem sorters peppar, mandelpotatis, grönsaker och konjakkrämsås',
        price: '389',
      },
      {
        name: "Blåmusslor con N'duja",
        description:
          "Blåmusslor med chardonnay, persilja, schalottenlök, vitlök, N'duja, grädde, aioli och surdeg",
        price: '315',
      },
      {
        name: "I'l Capitano",
        description:
          'Krämig bifpasta med kantareller, schalottenlök, Captain Morgan, timjan, grädde och Parmigiano',
        price: '325',
      },
      {
        name: 'Sotad Biffsallad',
        description:
          'Grillad biffsallad med mangochutney, kål, lök, sparris, tomater och pesto',
        price: '349',
      },
      {
        name: 'GASTRO|nome Köttbullar',
        description:
          'Stora kalvköttbullar med potatispuré, pressgurka, gräddsås och lingon',
        price: '295',
      },
      {
        name: 'Lammrack',
        description:
          '300g grillat lammrack med vitlök, rostade tomater, rödvinssås och potatiskaka',
        price: '445',
      },
      {
        name: 'Torskrygg',
        description:
          'Torskrygg med fänkål, salladslök, löjrom, mandelpotatis och Prosecco-krämsås',
        price: '389',
      },
      {
        name: 'Ravioli Tartufati',
        description:
          'Italiensk ostfylld ravioli med färsk tryffel, stekt salvia och Parmigiano',
        price: '298',
        tags: ['vegetarian'],
      },
    ],
  },

  // ─── DESSERTS ────────────────────────────────────────────
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        name: 'Caffè Affogato',
        description: 'Italiensk vaniljgelato toppad med espresso och mörk choklad',
        price: '125',
      },
      {
        name: 'Fragola',
        description:
          'Marinerade jordgubbar med mascarponekräm, biscottismulor och basilika',
        price: '129',
      },
      {
        name: 'Chocolate Passion',
        description:
          'Chokladmousse med passionsfruktsorbet och rostad vit chokladsmula',
        price: '149',
      },
      {
        name: 'Sorbetto al Limone',
        description: 'Citronsorbet med olivolja, limoncello och rostad mandel',
        price: '155',
        tags: ['veganOption'],
      },
      {
        name: 'Crème Brûlée',
        description: 'Klassisk vaniljkräm med bränt sockertäcke',
        price: '129',
      },
      {
        name: 'Gelato',
        description:
          'En kula ur husets sortiment, fråga personalen om dagens smaker',
        price: '89',
        tags: ['veganOption'],
      },
    ],
  },

  // ─── KAFFE & DRYCK ──────────────────────────────────────
  {
    id: 'kaffe-dryck',
    title: 'Kaffe & Dryck',
    items: [
      {
        name: 'Kaffe',
        description: 'Bryggkaffe',
        price: '39',
      },
      {
        name: 'Te',
        description: 'Earl Grey eller Grönt te',
        price: '39',
      },
      {
        name: 'Espresso',
        description: 'Enkel eller dubbel',
        price: '39/45',
      },
      {
        name: 'Espresso Macchiato',
        description: 'Espresso med mjölkskum',
        price: '40',
      },
      {
        name: 'Cappuccino',
        description: 'Klassisk cappuccino',
        price: '59',
      },
    ],
  },

  // ─── KAFFECOCKTAILS ──────────────────────────────────────
  {
    id: 'kaffecocktails',
    title: 'Kaffecocktails',
    items: [
      {
        name: 'Irish Coffee',
        description: 'Tullamore DEW, kaffe, socker, grädde',
        price: '145',
      },
      {
        name: 'Baileys Coffee',
        description: 'Baileys, kaffe, grädde',
        price: '145',
      },
      {
        name: 'Kaffe Karlsson',
        description: 'Triple Sec, Baileys, kaffe, grädde',
        price: '145',
      },
      {
        name: 'Kaffe D.O.M',
        description: 'Benedictine, kaffe, socker, grädde',
        price: '145',
      },
      {
        name: 'GASTRO|coffee',
        description: 'Amaretto, Frangelico, kaffe, grädde',
        price: '145',
      },
      {
        name: 'Espresso Martini',
        description: 'Vodka, Kahlua, Lavazza espresso',
        price: '145',
      },
    ],
  },
];
