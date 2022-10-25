const items = [
  {
    name: 'بهرام',
    id: 1,
  },
  {
    name: 'آرش',
    id: 2,
  },
  {
    name: 'مهسا',
    id: 3,
  },
  {
    name: 'سهیلا',
    id: 4,
  }
];

const reduced = items.reduce((acc, val) => (
  {...acc, [val.id]: {name: val.name, college: false, id: val.id, major: ''}}
), {})

console.log(reduced)


const arr = ["one", "two", "two", "3", "one", "one", "3", "4", "two"];

const arrFor = (arr) => {
  const obj = {};
  
  arr.forEach(el => {
    obj[el] ? obj[el] +=1 : obj[el] = 1;
  })
  
  console.log(obj)
  
}
