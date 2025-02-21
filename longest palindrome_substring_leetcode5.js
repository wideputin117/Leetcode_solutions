/**https://leetcode.com/problems/longest-palindromic-substring/ */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start =0
   let end= 0
// main for loop for finding the max substring
for(let i =0 ; i <s.length; i++){
   let len1= findPalindrome(s,i,i);
   console.log("the len1 is", len1)
   let len2= findPalindrome(s,i,i+1)
   // console.log("the len2 is", len2)
   let len = Math.max(len1,len2)
   if(len > end -start){
       end= i+(len/2)
       console.log('the end is', end)
       start  = i-Math.floor((len-1)/2)
       console.log("the satrt is", start)
   }
}


   function findPalindrome(s,left,right){
    if( s == null || left > right ) return 0    
   while(left >= 0 && right < s.length && s[left]==s[right]){
      left--
      right++
     }
    return right-left-1; // returning the length of the found palindrome
   }

   return s.substring(start,end+1)
};

console.log(longestPalindrome(s = "babad"))