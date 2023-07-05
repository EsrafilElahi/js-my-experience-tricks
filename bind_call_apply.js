1. Bind() Method: The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

example code :
let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function () {

		// Here "this" points to nameObj
		console.log(this.name);
	}
}

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();

// =====================

2. Call() Method: The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.

example code :
let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function (age) {
		console.log(this.name + " age is " + age);
	}
}

PrintName.sayHi.call(nameObj, 42);

// =====================

3. Apply() Method: The apply() method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.

example code :
let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function (...age) {
		console.log(this.name + " age is " + age);
	}
}
PrintName.sayHi.apply(nameObj, [42]);


// =====================
result :
Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

difference between : 
Bind --> return new function
Call --> bind directly, not return new function, arg pass separately (name=this, age, city)
Apply --> bind directly, not return new function, arg pass an array [...args]
