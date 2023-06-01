const memoize = (fn) =>{
let cache = {}
return function(...args){
let value = args[0]
if(value in cache){
    return cache[value]
}else{
    let result = fn(value)
    cache[value] = result
    return result
}
}
}


// Input
// "sum"
// ["call","call","getCallCount","call","getCallCount"]
// [[2,2],[2,2],[],[1,2],[]]
// Output
// [4,4,1,3,2]

function memoize(fn) {
    let cache= {}
    return function(...args) {
        let value =  String(args)
        if( value in cache){
            return cache[value]
        }
        return cache[value] = fn(...args)
    }
}