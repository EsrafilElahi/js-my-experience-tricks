function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;
    
    // if input array is empty, resolve immediately
    if(promises.length === 0) {
      resolve(results)
    }
  

    for (let i = 0; i < promises.length; i++) {
      promises[i].then((result) => {
          results[i] = result;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        
        }).catch((error) => {
          reject(error);
        });
    }
    
    


  });
}


// Example usage
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));




customPromiseAll([])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
});

