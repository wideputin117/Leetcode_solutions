/**The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR" */

var convert = function(s, numRows) {
  if(numRows==1){
    return s
  }
  const ans=new Array(numRows).fill('')
  let currentRow = 0
  let goingDown = true // initial we will move downwards first
  
  for(let char of s){
    ans[currentRow] += char;

    /** deciding where to move now */
    if(currentRow === 0 || currentRow ===  numRows-1){
        goingDown = !goingDown
    }

    currentRow += goingDown ? 1 : -1;
  }
  return ans.join('')
};