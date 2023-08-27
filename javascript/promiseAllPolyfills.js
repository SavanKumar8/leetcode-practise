const promise1 = new Promise((resolve, rejected) => {
  resolve("promise 1 is resolve");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolve");
  }, 1000);
});

//Promise.all([promise1, promise2]).then((res) => console.log(res));

// -------------------------------------------------------------------
//promise.all pollyfiils

// it take array of promises
// return array of result of input promises
// wait till all promises get resolved

Promise.myAll = (promiseArray) => {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArray.length; i++) {
      // looping on promise array
      promiseArray[i] // individial promjse array
        .then((res) => {
          result[i] = res; //push in same index as promise array index
          count++;
          if (count === promiseArray.length) {
            // promise array and result array should be equal
            resolve(result);
          }
        })
        .catch((e) => reject(e));
    }
  });
};

Promise.myAll([promise1, promise2]).then((res) => console.log(res));
