const str = "car is awesome car is car book red"

const findUnique = (str) => {
  const arr = str.split(" ");
  
  return arr.reduce((acc, val) => {
    if(val in acc) {
      acc[val] += 1
    } else {
    acc[val] = 1
    }
    
    return acc
  }, {});
}

const takeMax = (obj) => {
  let maxVal=0;
  let maxKey = null;
  
  for(let key in obj) {
    if(obj[key] > maxVal) {
      maxVal = obj[key];
      maxKey = key;
    }
  }
  
  return {[maxKey]: maxVal};
}

const resUnique = findUnique(str)
console.log(resUnique)
console.log(takeMax(resUnique))



