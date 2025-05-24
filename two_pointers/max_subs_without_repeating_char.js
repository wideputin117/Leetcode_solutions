/**Given a string s, find the length of the longest substring without duplicate characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1. */

var lengthOfLongestSubstring = function(s) {
  let maxlength =0;
  let i=0; // will move ahead
  let j=0  // used for deleting till 
  let ss = new Set()

  while(i<s.length){
    while(ss.has(s[i])){
         ss.delete(s[j])
         j++;
    }
    ss.add(s[i]);
    maxlength = Math.max(maxlength,i-j+1);
    i++
  }
  return maxlength
}

console.log(lengthOfLongestSubstring("abcabcbb"))