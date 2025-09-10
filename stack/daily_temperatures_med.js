/** dailyt temperatures */

/** we are using days index to keep track of if there are any future warmer days or not then we are performing our operations */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length
    let stack =[]
    let result = new Array(len).fill(0)
    // console.log(result)

    for(let i =len-1;i>=0;i--){
        console.log(i)
        while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
            stack.pop()
        }
        if(stack.length>0){
            result[i]= stack[stack.length-1]-i  // if stack lenth is 0 and while loop didnot run 
        }
        stack.push(i)
        console.log(`stack after each iteration: ${stack}`)
    }
    return result

};
console.log(dailyTemperatures(temperatures = [73,74,75,71,69,72,76,73]))