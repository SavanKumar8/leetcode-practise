let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 1") 
    }, 10000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 5000);
});

async function hanldepromise(){
    console.log("hello world")
    const val1 =  await p1;
        console.log("value 1");
       console.log(val1);

         const val2 = await p2;
                 console.log("value 2");
         console.log(val2);
}

console.log(hanldepromise())