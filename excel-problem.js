/**
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
 */

var titleToNumber = function(columnTitle) {
    // use charcode to get the charCode and minus 65 from it and add 1 to it you will get the column number

    let column = 0;
    let a = 0;
    for(let i=columnTitle.length-1;i>=0;i--){
        let temp = columnTitle.charCodeAt(i)-65+1;
       column = column + temp * parseInt(Math.pow(26,a))
    //     console.log(`temp is ${temp}`);
    //     console.log(`column ${column}`);
    //    console.log(`the power is ${parseInt(Math.pow(26,a))}`);
       a++
    }
    return column;
};

console.log(titleToNumber("ABC"))

var titleToNumber = function(columnTitle) {
    let count = 0;
    const letters = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10,
        K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19,
        T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };
    
    for (let i = 0; i < columnTitle.length; i++) {
        let currentLetter = columnTitle[i];
        console.log(currentLetter)
        count += letters[currentLetter] * Math.pow(26, columnTitle.length - 1 - i);
        console.log(letters[currentLetter])
    }

    return count;
};

console.log(titleToNumber("ABC"))