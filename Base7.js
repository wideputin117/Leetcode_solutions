/**
 * 
 * @param {Given an integer num, return a string of its base 7 representation.
Example 1:

Input: num = 100
Output: "202"} num 
 */

var convertToBase7 = function(num) {
    let result =""
   if(num ===  0){
    return "0"
   }
   const isNegative = num <0
   if(isNegative){
    num = -num;
   }
   while(num !== 0){
    let remainder = num %7
    result = remainder.toString() + result
    num = (num - remainder) / 7;
   }
   return isNegative ? "-"+ result:result
};

console.log(convertToBase7(100))