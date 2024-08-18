/**Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0
 */
// this question is asking for digital root of a num
// digital root is the sum of thr given num say 120 so sum is 1+2+3=6 // have to keep adding till we get single digit
const singleSum=(num)=>{
    return num===0?0: (num%9===0?0:num%9); // this is the easiest method digital root of a can be taken by the division of 9 to the digit
}
console.log(singleSum(12));

const singleSum2=(no)=>{
    if(no===0){
        return 0;
    }else{
        if(no%9===0){
            return 9;
        }
        return no%9;
    }
}
console.log(singleSum2(12))