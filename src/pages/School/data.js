let data = [
  {
    id: '1',
    year: '110',
    section: '01',
    ch: 96,
    en: 94,
    math: 100,
    nature: 97,
    society: 98,
  },
  {
    id: '2',
    year: '110',
    section: '02',
    ch: 91,
    en: 92,
    math: 93,
    nature: 94,
    society: 95,
  },
];


data.sort((a, b) => {
  return b.section - a.section;
});