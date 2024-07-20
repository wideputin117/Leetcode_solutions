/*
Problem= valid parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

var isValid = function(s) {
    let res;
  let len=s.length;
  
    let val = s.split("");
    console.log(val)
    // for(let i =0; i < len;){
    //     if(val[i]===val[i+1]){
    //         res = true;
    //         i +=2;
    //     }else{
    //         res = false;
    //     }
    // }

    // for(let i = 0; i < len-1;i+=2){
    //     console.log("i th val",i);
    //     for(let j = i+1; j < len; j++){
    //         if(val[i]===val[j]){
    //             res = true;
    //         }else if(val[i]!== val[j]){
    //             res = false
    //         }
    //     }
    // }
    let i = 0;
    while(i< len-1){
        if(val[i]!== val[i+1]){
            return false;
        }else{
            res = true
            i+=2;
        }
    }
    return res
    
};

console.log(isValid("()[]{}"))
console.log(isValid("(][]{}"))
console.log(isValid("()"))