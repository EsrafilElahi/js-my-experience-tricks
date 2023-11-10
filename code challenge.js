// with class base

class CustomObj {
  constructor(str) {
    this.str = str;
  }

  upper() {
    this.str = this.str.toUpperCase();
    return this;
  }
  lower() {
    this.str = this.str.toLowerCase();
    return this;
  }
  reverse() {
    this.str = this.str.split("").reverse().join("");
    return this;
  }
  toString() {
    return this.str;
  }
}

const ins = new CustomObj("Hello");

ins.lower();
ins.upper().reverse();

console.log(ins.toString());



// with obj base

const customObj = (str) => {
  let obj = {
    str: str,
    upper() {
      this.str = this.str.toUpperCase();
      return this;
    },
    lower() {
      this.str = this.str.toLowerCase();
      return this;
    },
    reverse() {
      this.str = this.str.split("").reverse().join("");
      return this;
    },
    toString() {
      return this.str;
    },
  };

  return obj;
};

const ins = customObj("Hello");

ins.lower();
ins.upper().reverse();

console.log(ins.toString()); // Output: OLLEH



// with function base

const customObj = (str) => {
  function upper() {
    this.str = this.str.toUpperCase();
    return this;
  }
  function lower() {
    this.str = this.str.toLowerCase();
    return this;
  }
  function reverse() {
    this.str = this.str.split("").reverse().join("");
    return this;
  }
  function toString() {
    return this.str;
  }

  return { str, upper, lower, reverse, toString };
};

const ins = customObj("Hello");

ins.lower();
ins.upper().reverse();

console.log(ins.toString());

