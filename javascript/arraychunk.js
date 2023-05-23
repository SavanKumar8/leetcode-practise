var chunk = function(arr, size) {
    return arr.map((item,index)=>{
        return arr.slice(index,index+size)
    })
};

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]