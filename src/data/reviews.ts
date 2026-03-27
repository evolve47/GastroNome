// ============================================================
// GASTRO|nome — Customer Reviews Data
// ============================================================

export interface Review {
  name: string;
  text: string;
  rating: number;
  source: 'google' | 'tripadvisor';
  date?: string;
}

export const reviews: Review[] = [
  {
    name: 'Burim',
    text: 'Den absolut bästa restaurangen i Lund om inte hela Skåne. Fantastisk atmosfär och personal som får dig att känna dig som hemma.',
    rating: 5,
    source: 'google',
  },
  {
    name: 'Lisa Persson',
    text: 'Alltid trevlig personal med fantastisk mat i en mysig miljö. Vi återkommer alltid!',
    rating: 5,
    source: 'google',
  },
  {
    name: 'Oskar Tilly',
    text: 'Otroliga pizzor, fantastiskt flatbröd, underbar personal och fantastiska cocktails. Nya menyn är på en helt annan nivå.',
    rating: 5,
    source: 'google',
  },
  {
    name: 'Emma JS',
    text: 'Vår absoluta favoritplats. 10/10 mat och dryck. Varje smakkombination är genomtänkt. En liten gömd pärla.',
    rating: 5,
    source: 'tripadvisor',
  },
  {
    name: 'Spellevink2014',
    text: 'Alla hjärtans dag-middag på Lunds mysigaste ställe. Fantastisk atmosfär, underbar mat och ägaren kom förbi och hälsade personligt.',
    rating: 5,
    source: 'tripadvisor',
  },
  {
    name: 'Evelina H',
    text: 'Firade födelsedag med SM-vinnande pizzan Cavolo Meraviglioso — unik och fantastisk smak. Desserterna Fragola och Crème brûlée var perfekta.',
    rating: 5,
    source: 'tripadvisor',
  },
  {
    name: 'Yasna G',
    text: 'Firade födelsedag med exceptionell service. Pizzorna var i en helt annan dimension och biffrätten smälte i munnen.',
    rating: 5,
    source: 'tripadvisor',
  },
  {
    name: 'Mark R',
    text: 'Familjevänligt med läcker och smakrik mat i en mysig atmosfär. Vitlöksbrödet nybakat med omsorg. Välkomnande personal.',
    rating: 5,
    source: 'tripadvisor',
  },
];
