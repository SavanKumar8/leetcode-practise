// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//Input: s = "()[]{}"
//[] = ["(",")","[","]"] SO WE WILL MAKE STACK EMPTY 

const isValid = (str) =>{
let stack = []
for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if(char ==="("||char==="{" || char==="["){
        stack.push(char)
    }else if(char===")" || char==="]" || char==="}"){
        if(stack.length===0) return false
        let top = stack.pop()
        if((char ===")" && top !="(") ||(char ==="}" && top !="{") || (char ==="]" && top !="[")){
            return false;
        } 
    }
}
if(stack.length===0) return true
}