const data = {
  name: "",
  family: "",
  city: "",
  phone: "",
  age: ""
}

const data2 = {
  name: "a",
  family: "a",
  city: "a",
  phone: "a",
  age: "a",
};


const valid = Array.from(Object.values(data)).every((item) => !!item); // false
const valid2 = [...Object.values(data2)].every((item) => !!item); // true
    
    
console.log(valid)
console.log(valid2)