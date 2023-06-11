let count= 0
function getData() {
    console.log("fetching data"+ count)
}


var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer)
     timer =setTimeout(()=>{
        fn(...args)
        },t)
    }
}

const betterfunction = debounce(getData,1000)