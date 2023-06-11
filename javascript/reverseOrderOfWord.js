
//"the sky is blue"

var reverseWords = function(s) {
     return  s.split(' ').filter(x => x !== "").reverse().join(' ')
};
console.log(reverseWords(" hello           world "))