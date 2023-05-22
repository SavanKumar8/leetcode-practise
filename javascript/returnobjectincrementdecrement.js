var createCounter = function(init) {
    let count = init;
    let obj ={}
    obj['increment'] = function(){
        return ++count
    }
    obj['decrement'] = function(){
        return --count
    }
    obj['reset'] = function(){
         count = init
        return count
    }
    return obj
};
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */