var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init);
};

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) {
  return accum + curr;
},100));

//without reduce
var reduce = function (nums, fn, init) {
  let res = init;
  nums.forEach((item) => {
    res = fn(res, item);
  });

  return res;
};