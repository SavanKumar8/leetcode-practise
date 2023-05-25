var chunk = function(arr, size) {
    let result = []
    let index=0
    while (index<arr.length) {
        result.push(arr.slice(index,index+size))
        index +=size
   
    }
    return result;
};

console.log(chunk([1,2,3,4,5],2))
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]] 