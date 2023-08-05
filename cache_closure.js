function sumGenerator () {
  let cache = {}
  
  return function sum(num) {
    if(cache[num]) return cache[num]
    let sum = 0;

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        for (let k = 0; k < num; k++) {
          sum += i + j + k;
        }
      }
    }
  
    cache[num] = sum;
    return sum
  }

}

const func = sumGenerator();

console.time('first start');
console.log(func(100));
console.timeEnd('first end');

console.time('second start');
console.log(func(100));
console.timeEnd('second end');
