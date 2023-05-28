//You're given strings jewels representing the types of stones that are jewels, and stones 
//representing the stones you have. Each character in stones is a type of stone you have. 
//You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
let newJewels =  jewels.split('')
for (let index = 0; index < array.length; index++) {
  if (stones.includes(newJewels[i])) {
    count = count+1
  }
    
}
    return count;
};