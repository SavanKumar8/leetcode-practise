//2724. Sort By

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

// Input: (arr = [
//   [3, 4],
//   [5, 2],
//   [10, 1],
// ]),
//   (fn = (x) => x[1]);
// Output: [
//   [10, 1],
//   [5, 2],
//   [3, 4],
// ];

var sortBy = function (arr, fn) {
  arr.sort((a, b) => fn(a) - fn(b));
  return arr;
};
