const purchase = 'خرید کتاب';
const freeDownload = 'دانلود رایگان کتاب';

const book = 'چه کسی پنیر مرا جابجا کرد';

const compoArr = (...features) => (book) => [...features].reduce((acc, val) => `${val} ${acc}`, book)

console.log(
  compoArr(purchase)(book)
);