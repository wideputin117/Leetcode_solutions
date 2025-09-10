/* generate parentheses */
var generateParenthesis = function(n) {
    let stack  =[]
    let res=[]
    
    function backtrack(openN,closedN){
          if(openN == closedN && closedN == n){
        console.log(stack,"stack here")
         res.push(stack.join(''))
        //  return
      }
      if(openN<n){
        stack.push("(")
        console.log(stack)
        backtrack(openN+1,closedN)
        stack.pop()
      }
      if(closedN <openN){
        stack.push(")")
        console.log(stack)
        backtrack(openN,closedN+1)
        stack.pop()
      }
       
  
    }
              backtrack(0,0)

     console.log("the response is",res)
    return res
};
console.log(generateParenthesis(3))