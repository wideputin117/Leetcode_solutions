/**
 * Reversing bits and getting their value
 * 
 */
var reverseBits = function(n) {
    let binaryStr =  n.toString(2).padStart(32,'0');
    let revbinaryStr = binaryStr.split("").reverse().join("");
    return parseInt(revbinaryStr,2);

};

console.log(reverseBits("00000010100101000001111010011100"));

 