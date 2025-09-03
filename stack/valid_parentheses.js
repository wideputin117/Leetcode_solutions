/* valid parentheses  */
var isValid = function(s) {
    let stack=[]
    // s.split('')
    let map = new Map()
    map.set(')','(')
    map.set(']','[')
    map.set('}','{')

    // for(let n of  )
    for (let num of s){
        if(map.has(num)){
            if(stack.length >0 && stack[stack.length-1]==map.get(num)){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(num)
        }
    }
    return stack.length ==0?true:false
};

console.log(isValid(s = "()[){}"))