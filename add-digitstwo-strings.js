/** Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
*/

var addStrings = function(num1, num2) {
  let sum= 0;
  num1= BigInt(num1);
  num2= BigInt(num2);
  sum= num1+num2
  
  return sum.toString();
  
};

console.log(addStrings('134','1'))