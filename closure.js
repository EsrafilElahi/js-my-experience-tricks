// a closure gives you access to an outer function's from an inner function.

function closureObject() {
  let x = 42; // access outside variable from available function
  
  return {
    
    log() {
      console.log(x);
    }
    increment() {
      x++;
    }
    update(value) {
      x = value;
    }
  }
}

const closureObjInstance = closureObject();
closureObjInstance.log(); // 42
closureObjInstance.increment();
closureObjInstance.log(); // 43
closureObjInstance.update(5);
closureObjInstance.log(); // 5

const closureObjInstance2 = closureObject();
closureObjInstance2.log(); // 42

