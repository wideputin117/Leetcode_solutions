var evalRPN = function(tokens) {
    let stack =[]
    let operators =["+","*","/","-"]
   
    for(let i=0;i<tokens.length;i++){
        if(operators.includes(tokens[i])){
            
            let secondOperand = Number(stack.pop())
            let firstOperand = Number(stack.pop())

            console.log(`first and second are: ${firstOperand} and ${secondOperand}`)
            let result =0
          switch (tokens[i]) {
          case "*":
            result = firstOperand * secondOperand;
            break;
       
          case "/":
            result =Math.trunc(firstOperand / secondOperand);
            break;
       
          case "+":
            result = firstOperand + secondOperand;
            break;
       
          case "-":
            result = firstOperand - secondOperand;
            break;
       
          default:
            throw new Error("Unknown operator: " + tokens[i]);
        }
        console.log("the result after",result)
            stack.push(result)
        }else{
        stack.push(tokens[i])
        console.log("the stack after iteration is", stack)}
    }
    return Math.floor(stack[0])
};
console.log(evalRPN(tokens = ["4","13","5","/","+"]))
