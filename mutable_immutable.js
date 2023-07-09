// mutable : array, object, function, class, Map, Set
// immutable : string, number, Boolean, null, undefined

// mutable example :
let a = {
    foo: 'bar'
};

let b = a;

a.foo = 'test';

console.log(b.foo); // test
console.log(a === b) // true ---> changed => (with Object.freez could immutable the obj)

// immutable example :
let a = 'test';
let b = a;
a = a.substring(2);

console.log(a) //st
console.log(b) //test
console.log(a === b) //false ---> not changed
