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