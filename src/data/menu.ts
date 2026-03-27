// ============================================================
// GASTRO|nome — Full À La Carte Menu Data (Bilingual SV/EN)
// ============================================================

export interface MenuItem {
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price: string;
  tags?: ('vegetarian' | 'vegan' | 'glutenFreeOption' | 'veganOption' | 'award')[];
  award?: string;
  awardEn?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  note?: string;
  noteEn?: string;
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
        descriptionEn: 'Aromatic and juicy air-dried ham, aged for 24 months',
        price: '129',
      },
      {
        name: 'Mortadella Chiara IGP',
        description: 'Krämig chark med toner av pistagenöt',
        descriptionEn: 'Mild mortadella with a nutty saltiness from pistachios',
        price: '85',
      },
      {
        name: 'Salame Felino IGP',
        description: 'Lufttorkad italiensk salami från Parmaregionen',
        descriptionEn: 'A flavorful, high-quality, air-dried Italian salami from the Parma region',
        price: '115',
      },
      {
        name: 'Parmigiano Reggiano DOP',
        description: '30 månaders lagrad parmesan av opastöriserad mjölk',
        descriptionEn: '30 months aged Parmesan cheese made from unpasteurized fresh milk',
        price: '98',
      },
      {
        name: 'Pane Grigliato',
        description: 'Grillat surdegsbröd med extra virgin olivolja',
        descriptionEn: 'Freshly baked grilled sourdough bread with extra virgin olive oil',
        price: '75',
        tags: ['vegetarian', 'vegan'],
      },
      {
        name: 'Arancini',
        description: 'Friterade risottobullar med parmesan på tomatsås',
        descriptionEn: 'Deep-fried rice ball with Parmesan on a bed of San Marzano tomato sauce',
        price: '96',
      },
      {
        name: 'Nocellara Oliver',
        nameEn: 'Nocellara Olives',
        description: 'Gröna sicilianska oliver',
        descriptionEn: 'Fantastic green olives from Sicily with a crisp, fleshy texture',
        price: '89',
        tags: ['vegetarian', 'vegan'],
      },
      {
        name: 'Carciofi Fritti',
        nameEn: 'Fried Artichokes',
        description: 'Friterade kronärtskockor med basilikakräm',
        descriptionEn: 'Deep-fried artichokes on basil cream, topped with Parmesan foam',
        price: '89',
        tags: ['vegetarian'],
      },
      {
        name: 'Burrata',
        description: 'Krämig ost med olivolja, peppar, salt och basilika',
        descriptionEn: 'A creamy delicacy from Apulia with olive oil, pepper, sea salt, and fresh basil',
        price: '109',
        tags: ['vegetarian'],
      },
      {
        name: 'Italian Fries',
        description: 'Krispiga pommes med Parmigiano, örter, vitlök och peppar',
        descriptionEn: 'Crispy fries tossed with Parmigiano Reggiano, fresh herbs, garlic, and pepper',
        price: '96',
      },
      {
        name: 'Vitlöksbröd',
        nameEn: 'Garlic Bread',
        description: 'Surdeg med mozzarella, örter och aioli',
        descriptionEn: 'Freshly baked sourdough with garlic, fior di latte mozzarella, herbs, and aioli',
        price: '89',
        tags: ['vegetarian', 'veganOption'],
      },
      {
        name: 'Kålsallad',
        nameEn: 'Cabbage Salad',
        description: 'Kålsallad med Parmigiano, olivolja och peppar',
        descriptionEn: 'Fresh salad with white cabbage, red cabbage, Parmigiano, olive oil, and pepper',
        price: '79',
        tags: ['vegetarian', 'veganOption'],
      },
    ],
  },

  // ─── FÖRRÄTTER ───────────────────────────────────────────
  {
    id: 'forratrer',
    title: 'Förrätter',
    titleEn: 'Starters',
    items: [
      {
        name: 'Sotad Carpaccio',
        nameEn: 'Smoked Carpaccio',
        description:
          'Sotad nötkötts-carpaccio med pinjenötter, pesto, tryffelolja, lagrad parmesan, tomater och vattenkrasse',
        descriptionEn:
          'Low-temperature smoked beef tenderloin with roasted pine nuts, pesto cream, truffle oil, aged Parmigiano, semi-roasted tomatoes, and fresh cress',
        price: '169',
      },
      {
        name: 'Insalata Caprese',
        nameEn: 'Caprese Salad',
        description:
          'Italiensk tomatsallad med buffel-mozzarella, basilika, olivolja, balsamico och peppar',
        descriptionEn:
          'Italian tomato salad with Mozzarella Di Bufala Campana D.O.P., fresh basil, extra virgin olive oil, Carandini balsamic syrup, and pepper',
        price: '125',
        tags: ['vegetarian'],
      },
      {
        name: 'Gambretti',
        description: 'Grillad röd räka med chili, vitlök, örter, aioli och surdegsbröd',
        descriptionEn: 'Whole large grilled red prawns marinated in chili, garlic, and fresh herbs, served with aioli and crispy sourdough bread',
        price: '189',
      },
      {
        name: 'Wagyu Biff A5 BMS 9+',
        nameEn: 'Wagyu Beef A5 BMS 9+',
        description: 'Japanskt Wagyu-kött med fantastisk marmorering, 75g eller 150g',
        descriptionEn: 'The finest Japanese beef, world-renowned for its exceptional marbling and wonderfully nutty, buttery flavor. 75g or 150g',
        price: '482/850',
      },
    ],
  },

  // ─── FLATBREAD ───────────────────────────────────────────
  {
    id: 'flatbread',
    title: 'Flatbread',
    subtitle: 'Lyxiga surdegsbakade varianter — perfekt som förrätt eller till drinken',
    subtitleEn: 'A luxurious version of our stone-baked sourdough pizzas — perfect to share as a starter or with your drink',
    note: 'Glutenfri botten +39 kr | Veganskt alternativ +25 kr',
    noteEn: 'Gluten-free base +39 SEK | Vegan option +25 SEK',
    items: [
      {
        name: 'Tryffel Bianco',
        nameEn: 'Truffle Bianco',
        description:
          'Tryffelkräm, svamp, Parmigiano, ruccola och färsk italiensk tryffel',
        descriptionEn:
          'Truffle cream, wild mushrooms, Parmigiano Reggiano, arugula, pepper, olive oil, and fresh Italian truffles',
        price: '225',
        tags: ['vegetarian'],
      },
      {
        name: 'Chèvre Fichi',
        description:
          'Honungsglaserad getost, valnötter, Philadelphiakräm, Parmigiano, ruccola och fikon',
        descriptionEn:
          'Honey-glazed goat cheese, crushed walnuts, cream cheese, Parmigiano Reggiano, arugula, pepper, fresh figs, and olive oil',
        price: '235',
        tags: ['vegetarian'],
      },
      {
        name: 'Löjroms Heaven',
        nameEn: 'Lumpfish Roe Heaven',
        description:
          'Philadelphiakräm, löjrom, crème fraîche, gräslök, dill och citron',
        descriptionEn:
          'Cream cheese, lumpfish roe, crème fraîche, chives, dill, and lemon',
        price: '259',
      },
    ],
  },

  // ─── GOURMET PIZZA ───────────────────────────────────────
  {
    id: 'gourmet-pizza',
    title: 'Gourmet Pizza',
    subtitle: 'Vinnare av Pizza SM 2023 & 2024',
    subtitleEn: 'Winners of Pizza SM 2023 & 2024',
    note: 'Glutenfri botten +39 kr | Veganskt alternativ +20 kr',
    noteEn: 'Gluten-free base +39 SEK | Vegan option +20 SEK',
    items: [
      {
        name: 'Margherita',
        description:
          'Tomatsås, fior di latte mozzarella, Parmigiano, rostade tomater och basilika',
        descriptionEn:
          'House-made tomato sauce, fior di latte mozzarella, Parmigiano Reggiano, semi-roasted Romantica tomatoes, and fresh basil',
        price: '175',
        tags: ['vegetarian', 'veganOption'],
      },
      {
        name: 'Paradisiaca Parma',
        description:
          'Tomatsås, mozzarella, Prosciutto di Parma, ruccola, Parmigiano, olivolja och peppar',
        descriptionEn:
          'House-made tomato sauce, fior di latte mozzarella, Bedogni Prosciutto di Parma, arugula, Parmigiano Reggiano, olive oil, and pepper',
        price: '239',
      },
      {
        name: 'Diavola Piccante',
        nameEn: 'Spicy Diavola',
        description:
          "Tomatsås, N'duja, salami, burrata, örtolija, tomater, Parmigiano, peppar och basilika",
        descriptionEn:
          "House-made tomato sauce, N'duja, Ventricina salami, Burrata, basil oil, semi-roasted tomatoes, Parmigiano Reggiano, pepper, and fresh basil",
        price: '245',
      },
      {
        name: 'Äkta Capricciosa',
        nameEn: 'Genuine Capricciosa',
        description:
          'Tomatsås, mozzarella, prosciutto, svamp, oliver, kronärtskocka, Parmigiano och basilika',
        descriptionEn:
          'House-made tomato sauce, fior di latte mozzarella, prosciutto cotto, wild mushrooms with herbs and garlic, olives, artichokes, Parmigiano, and basil',
        price: '239',
      },
      {
        name: 'Burrata',
        description:
          'Mozzarella, mortadella, burrata, pistaschmandel, Parmigiano, olivolja, peppar och basilika',
        descriptionEn:
          'Fior di latte mozzarella, Mortadella Chiara IGP, Burrata, crushed pistachios, Parmigiano Reggiano, olive oil, pepper, and fresh basil',
        price: '245',
      },
      {
        name: 'Estate Caprese',
        description:
          'Tomatsås, buffel-mozzarella, cocktailtomater, spenat, Parmigiano och balsamico',
        descriptionEn:
          'House-made tomato sauce, Mozzarella Di Bufala Campana D.O.P., seasonal cherry tomatoes, baby spinach, Parmigiano, Carandini balsamic syrup, olive oil, and basil',
        price: '235',
        tags: ['vegetarian', 'veganOption'],
      },
      {
        name: 'Filetto alla GASTRO',
        description:
          'Sotad biff, pestokräm, knaprig lök, rostade tomater, Parmigiano, ruccola och nötter',
        descriptionEn:
          'Smoked, low-temperature beef tenderloin, pesto cream, crispy pearl onions, semi-roasted tomatoes, Parmigiano, arugula, and toasted pine nuts',
        price: '279',
        tags: ['award'],
        award: '1:a plats Pizza SM 2024',
        awardEn: '1st place Pizza SM 2024',
      },
      {
        name: 'Cavolo Meraviglioso',
        description:
          'Mozzarella, Taleggio, skivad potatis, friterad grönkål, tryffelolja, Parmigiano och färsk tryffel',
        descriptionEn:
          'Fior di latte mozzarella, Taleggio DOP, thinly sliced potatoes, fried kale, truffle oil, Parmigiano, pepper, and freshly grated Italian truffle',
        price: '259',
        tags: ['vegetarian', 'award'],
        award: '1:a plats Pizza SM 2023',
        awardEn: '1st place Pizza SM 2023',
      },
    ],
  },

  // ─── HUVUDRÄTTER ─────────────────────────────────────────
  {
    id: 'huvudratter',
    title: 'Huvudrätter',
    titleEn: 'Main Courses',
    items: [
      {
        name: 'Pepparbiff',
        nameEn: 'Pepper Steak',
        description:
          'Oxfilé rullad i fem sorters peppar, mandelpotatis, grönsaker och konjakkrämsås',
        descriptionEn:
          '220g beef tenderloin rolled in a blend of five peppers, served with crispy almond potatoes, seasonal vegetables, and a rich cognac cream sauce',
        price: '389',
      },
      {
        name: "Blåmusslor con N'duja",
        nameEn: "Blue Mussels with N'duja",
        description:
          "Blåmusslor med chardonnay, persilja, schalottenlök, vitlök, N'duja, grädde, aioli och surdeg",
        descriptionEn:
          "Mussels cooked with chardonnay, parsley, shallots, garlic, N'duja, and a splash of cream. Served with aioli and freshly baked sourdough bread",
        price: '315',
      },
      {
        name: "I'l Capitano",
        description:
          'Krämig bifpasta med kantareller, schalottenlök, Captain Morgan, timjan, grädde och Parmigiano',
        descriptionEn:
          'Creamy beef fillet pasta with chanterelles, shallots, Captain Morgan, thyme, and a splash of cream. Topped with Parmigiano and semi-roasted tomatoes',
        price: '325',
      },
      {
        name: 'Sotad Biffsallad',
        nameEn: 'Smoked Beef Salad',
        description:
          'Grillad biffsallad med mangochutney, kål, lök, sparris, tomater och pesto',
        descriptionEn:
          'A hearty salad with grilled beef tenderloin, mango chutney, glazed cabbage, crispy onions, buttered asparagus broccoli, oven-roasted tomatoes, pesto cream, and Parmigiano',
        price: '349',
      },
      {
        name: 'GASTRO|nome Köttbullar',
        nameEn: 'GASTRO|nome Meatballs',
        description:
          'Stora kalvköttbullar med potatispuré, pressgurka, gräddsås och lingon',
        descriptionEn:
          'Large veal meatballs served with smooth mashed potatoes, pickled gherkins, cream sauce, and fresh lingonberries',
        price: '295',
      },
      {
        name: 'Lammrack',
        nameEn: 'Lamb Rack',
        description:
          '300g grillat lammrack med vitlök, rostade tomater, rödvinssås och potatiskaka',
        descriptionEn:
          '300g whole grilled rack of lamb with oven-roasted garlic, semi-roasted tomatoes, rich red wine sauce, crispy potato cake, and rosemary',
        price: '445',
      },
      {
        name: 'Torskrygg',
        nameEn: 'Cod Loin',
        description:
          'Torskrygg med fänkål, salladslök, löjrom, mandelpotatis och Prosecco-krämsås',
        descriptionEn:
          'Pan-seared cod loin with sautéed fennel and spring onions, trout roe, herb-infused almond potatoes, and a creamy Prosecco sauce',
        price: '389',
      },
      {
        name: 'Ravioli Tartufati',
        nameEn: 'Truffle Ravioli',
        description:
          'Italiensk ostfylld ravioli med färsk tryffel, stekt salvia och Parmigiano',
        descriptionEn:
          'Delicious ravioli filled with Italian cheeses, topped with shaved fresh truffle, fried sage, and Parmigiano',
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
        nameEn: 'Coffee Affogato',
        description: 'Italiensk vaniljgelato toppad med espresso och mörk choklad',
        descriptionEn: 'A large scoop of authentic Italian vanilla gelato topped with freshly brewed espresso and grated dark chocolate',
        price: '125',
      },
      {
        name: 'Fragola',
        nameEn: 'Strawberry',
        description:
          'Marinerade jordgubbar med mascarponekräm, biscottismulor och basilika',
        descriptionEn:
          'Lightly marinated strawberries with airy mascarpone cream, biscotti crumble, and fresh basil',
        price: '129',
      },
      {
        name: 'Chocolate Passion',
        description:
          'Chokladmousse med passionsfruktsorbet och rostad vit chokladsmula',
        descriptionEn:
          'Chocolate mousse with fresh passion fruit sorbet and roasted white chocolate crumble',
        price: '149',
      },
      {
        name: 'Sorbetto al Limone',
        nameEn: 'Lemon Sorbet',
        description: 'Citronsorbet med olivolja, limoncello och rostad mandel',
        descriptionEn: 'Light lemon sorbet with extra virgin olive oil, limoncello, and toasted almonds',
        price: '155',
        tags: ['veganOption'],
      },
      {
        name: 'Crème Brûlée',
        description: 'Klassisk vaniljkräm med bränt sockertäcke',
        descriptionEn: 'Smooth vanilla cream custard topped with a thin layer of caramelized sugar',
        price: '129',
      },
      {
        name: 'Gelato',
        description:
          'En kula ur husets sortiment, fråga personalen om dagens smaker',
        descriptionEn:
          "A large scoop of the house's delicious gelato or sorbet. Ask staff for today's flavors",
        price: '89',
        tags: ['veganOption'],
      },
    ],
  },

  // ─── KAFFE & DRYCK ──────────────────────────────────────
  {
    id: 'kaffe-dryck',
    title: 'Kaffe & Dryck',
    titleEn: 'Coffee & Tea',
    items: [
      {
        name: 'Kaffe',
        nameEn: 'Coffee',
        description: 'Bryggkaffe',
        descriptionEn: 'Brewed coffee',
        price: '39',
      },
      {
        name: 'Te',
        nameEn: 'Tea',
        description: 'Earl Grey eller Grönt te',
        descriptionEn: 'Earl Grey or Green Tea',
        price: '39',
      },
      {
        name: 'Espresso',
        description: 'Enkel eller dubbel',
        descriptionEn: 'Single or double',
        price: '39/45',
      },
      {
        name: 'Espresso Macchiato',
        description: 'Espresso med mjölkskum',
        descriptionEn: 'Espresso with milk foam',
        price: '40',
      },
      {
        name: 'Cappuccino',
        description: 'Klassisk cappuccino',
        descriptionEn: 'Classic cappuccino',
        price: '59',
      },
    ],
  },

  // ─── KAFFECOCKTAILS ──────────────────────────────────────
  {
    id: 'kaffecocktails',
    title: 'Kaffecocktails',
    titleEn: 'Coffee Cocktails',
    items: [
      {
        name: 'Irish Coffee',
        description: 'Tullamore DEW, kaffe, socker, grädde',
        descriptionEn: 'Tullamore DEW, coffee, brown sugar, cream',
        price: '145',
      },
      {
        name: 'Baileys Coffee',
        description: 'Baileys, kaffe, grädde',
        descriptionEn: 'Baileys, coffee, cream',
        price: '145',
      },
      {
        name: 'Kaffe Karlsson',
        nameEn: 'Coffee Karlsson',
        description: 'Triple Sec, Baileys, kaffe, grädde',
        descriptionEn: 'Triple Sec, Baileys, coffee, cream',
        price: '145',
      },
      {
        name: 'Kaffe D.O.M',
        nameEn: 'Coffee D.O.M',
        description: 'Benedictine, kaffe, socker, grädde',
        descriptionEn: 'Benedictine, coffee, brown sugar, cream',
        price: '145',
      },
      {
        name: 'GASTRO|coffee',
        description: 'Amaretto, Frangelico, kaffe, grädde',
        descriptionEn: 'Amaretto, Frangelico, coffee, cream',
        price: '145',
      },
      {
        name: 'Espresso Martini',
        description: 'Vodka, Kahlua, Lavazza espresso',
        descriptionEn: 'Vodka, Kahlua, Lavazza espresso',
        price: '145',
      },
    ],
  },
];
