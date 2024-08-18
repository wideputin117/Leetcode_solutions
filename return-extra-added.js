/**You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

 

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
 */

var findTheDifference = function(s, t) {
   
  let res;
  for(let i=0;i<s.length;i++){
   res ^= s.charCodeAt(i)
   console.log(res);
  }
  for(let j=0;j<t.length; j++){
    res ^= t.charCodeAt(j);
    console.log(res)
  }
  return String.fromCharCode(res);
};
console.log(findTheDifference("abcd","abcde"))