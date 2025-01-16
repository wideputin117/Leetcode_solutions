/** Medium */
/**
 * Given two positive integers num1 and num2, find the positive integer x such that:

x has the same number of set bits as num2, and
The value x XOR num1 is minimal.
Note that XOR is the bitwise XOR operation.

Return the integer x. The test cases are generated such that x is uniquely determined.

The number of set bits of an integer is the number of 1's in its binary representation.
 */

var minimizeXor = function(num1, num2) {
    let convertedNum1 = num1.toString(2)
    let convertedNum2 = num2.toString(2)
    // console.log(convertedNum1,typeof convertedNum2)
    let bitsCountNum2 = num2.toString(2).split("").filter(item => item === "1").length;
    console.log(bitsCountNum2)
    // bitsCountNum2 = bitsCountNum2.join("")
    // console.log(bitsCountNum2)
    let digit = (1 << bitsCountNum2)-1
    console.log(digit)
 
    let minimal= digit^num1
    return minimal < digit ? digit :minimal ;
    /** my approach */
    /**
     *        let convertedNum1 = num1.toString(2)
    let convertedNum2 = num2.toString(2)
    console.log(convertedNum1,typeof convertedNum2)
    let bitsCountNum2 = convertedNum2.split("").filter(item=> item === "1")
    // console.log(bitsCountNum2.join(""))
    bitsCountNum2 = bitsCountNum2.join("")
console.log(bitsCountNum2)
let digit = parseInt(bitsCountNum2,2)
console.log(digit)
 
let minimal= digit^num1
if(minimal<digit){
    return digit
}
     */
    
};



console.log(minimizeXor( num1 = 3, num2 = 5))