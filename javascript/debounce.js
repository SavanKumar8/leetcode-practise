let count= 0
function getData() {
    console.log("fetching data"+ count)
}


function debounce(call,d){
let timer;
return function(...args){
 if(timer) clearInterval(timer)
 setTimeout(()=>{
call()
 },d)
}
}

const betterfunction = debounce(getData,1000)