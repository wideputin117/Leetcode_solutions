/**
 * Objective is to find the longest palindrome from a given string
 * 
 * Approach is to find the frequency of each character if it is even add it to the length else if odd remove one from character and add to the length
 * keep a oddfound to keep track of a odd character is it remains true and add 1 to the length and return it
 */

var longestPalindrome = function(s) {

    // base case
  let count=0;
  let charFreq={};
  if(s.length === 1){
    count =1;
    return count;
  }  
 
for (let char of s){
    charFreq[char]= (charFreq[char] || 0 )+1;
}

let oddfound= false;
for (let char in charFreq){
console.log(charFreq[char]);
 if(charFreq[char] %2 === 0){
    count += charFreq[char];
 }else{
 count += charFreq[char]-1
 oddfound = true}
}
 if(oddfound){
    count++
 }
 return count;
};
console.log(longestPalindrome("manihbdusjbcmmazc"))