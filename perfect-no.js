/**A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer num, return true if num is a perfect number, otherwise return false. 
Example 1:

Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.
*/
// less optimal
var checkPerfectNumber2 = function(num) {
    let sum=0;
    for(let i=1;i<num;i++){
        if(num % i=== 0){
            sum += i;
        }
    }
return sum===num;
};
 

// second Method more optimal
var checkPerfectNumber = function(num) {
    let sum=0;
    let sqr= Math.sqrt(num)
   for(let i=1;i<=sqr;i++){
       if(num % i === 0){
           sum += i;
           if (i !== num / i && num / i !== num) {
            sum += num/i;
        }
       }
   }
   console.log(sum)
return sum===num;
};
console.log(checkPerfectNumber(28))