/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order.
 The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/


function value(digits) {
    let stringDigit = digits.join('');
    
    // Convert the string to an integer
    let number = BigInt(stringDigit);
    
    // Increment the number by 1
    number += BigInt(1);
    
    // Convert the number back to a string and then to an array of digits
    let output = number.toString().split('').map(Number);
    
    return output;
    

}

console.log(value([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))