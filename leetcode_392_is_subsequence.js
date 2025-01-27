/**
 * link: https://leetcode.com/problems/is-subsequence/
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 */

var isSubsequence = function(s, t) {
    
    let left = 0;
    let right =0;
    s= s.split("")
    t = t.split("")
    let s_length = s.length
    let t_length = t.length;

    while(left < s_length && right < t_length){
        if(s[left]==t[right]){
            left++
            right++
        }else if(s[left]!==t[right]){
            right++
        }
    }
    if(left === s.length){
        return true
    }
    return false
    
    // console.log(finalString)
};
console.log(isSubsequence(s = "axc", t = "ahbgdc"))