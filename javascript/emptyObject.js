//obj = { x: 5, y: 42 };

var isEmpty = function (obj) {
if(Array.isArray(obj)){
    return obj.length  ? false :true
}
else if(typeof obj === "object"){
return  Object.keys(obj).length ? false : true;
}
};
