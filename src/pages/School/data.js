let data = [
  {
    id: '1',
    year: '110',
    section: '1',
    type:'1',
    ch: 96,
    en: 94,
    math: 100,
    nature: 97,
    society: 98,
  }
];


data.sort((a, b) => {
  return b.section - a.section;
});

// 多欄排序
// https://stackoverflow.com/questions/6129952/sort-javascript-array-by-two-numeric-fields
data.sort((a, b) => a.year - b.year || a.section - b.section);