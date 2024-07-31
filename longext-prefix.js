// FINDING common prefix in array of string

var longestCommonPrefix = function(strs) {
  // base to check if strs is empty
  if(strs.length === 0){
    return '';
  }  
 // take first string as an prefix
 let prefix = strs[0];

 // use loop to iterate over all the strings in array
 for (let i = 0; i < strs.length; i++) {
      while(strs[i].indexOf(prefix) !== 0){ // will run till the indexOf prefix is not 0 will stop after the indexOf is found and is 0
       prefix = prefix.substring(0,prefix.length-1); // will remove one character from the end of prefix till the indexof is not found
    }if(prefix === '')return '';
    
 }
 return prefix

};


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]))