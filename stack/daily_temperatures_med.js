// /** dailyt temperatures */

// /** we are using days index to keep track of if there are any future warmer days or not then we are performing our operations */
// var dailyTemperatures = function(temperatures) {
//     let len = temperatures.length
//     let stack =[]
//     let result = new Array(len).fill(0)
//     // console.log(result)

//     for(let i =len-1;i>=0;i--){
//         console.log(i)
//         while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
//             stack.pop()
//         }
//         if(stack.length>0){
//             result[i]= stack[stack.length-1]-i  // if stack lenth is 0 and while loop didnot run 
//         }
//         stack.push(i)
//         console.log(`stack after each iteration: ${stack}`)
//     }
//     return result

// };
// console.log(dailyTemperatures(temperatures = [73,74,75,71,69,72,76,73]))

// const daily_temp = (arr)=>{
//    let result =[]
//    for(let i=0;i<=arr.length-1;i++){
//     //    for(let j =i+1;j<arr.length;){
//     //       if(arr[j]>arr[i]){
//     //         let pos = j-i
//     //         result.push(pos)
//     //         break
//     //       }
//     //       console.log(arr[i])
//     //       j++
//     //     }
//     let j=i+1
//     while(j<=arr.length-1){
//         if(arr[j]>arr[i]){
//             let pos= j-i
//             result.push(pos)
//             break
//         }j++
//        }
//     }
//    return result
// }

// console.log(daily_temp([30,29,38,30,36,35,40,28]))
// console.log(daily_temp([4,3,2,1]))


const daily_temparatures=(arr)=>{
    let stack=[]
    let result = new Array(arr.len).fill(0)
    for(let i=0;i<arr.length;i++){
        
        while(stack.length > 0 &&  arr[i]>arr[stack[stack.length-1]]){
            let prev_index = stack.pop()
            console.log("the prev",prev_index)
            console.log(prev_index)
            result[prev_index]=i-prev_index
         }
        stack.push(i)
    }
    return result
}

console.log(daily_temparatures([30,29,38,30,36,35,40,28]))