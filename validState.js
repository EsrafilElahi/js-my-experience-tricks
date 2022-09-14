const data = {
  name: "",
  family: "",
  city: "",
  phone: "",
  age: ""
}


const valid = [...Object.values(data)].every(item => !!item)
    
    
console.log(valid)