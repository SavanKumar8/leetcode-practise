setTimeout(()=>{
    console.log("time out started")
},[1000])
// array flat using recursive way
arr = [1, 2, 3, [4, 5, 6]];
Array.prototype.myFlat = function (depth = 1) {
  let result = [];
  this.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
};

// flatten nested object

obj = {a:1,b:{c:2},d:4,e:{f:{g:5}}}

//output

// obj:{
//     a:1,
//     b.c:2,
//     d:4,
//     e.f.g:5
// }

function flattenObj(obj,prefix = ''){
    let resultObj = {}
    for(key in obj){
        val = obj[key]
let newPrefix =  prefix === ''? key:prefix+'.'+key
        if(val !== null || typeof val === 'object'){
            let recursive = flattenObj(val, newPrefix);
            resultObj = { ...resultObj ,...resultObj};
        }else{
            resultObj[newPrefix]=val
        }
    }
    return resultObj
}