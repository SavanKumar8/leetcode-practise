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

// array flat using ittrerative way