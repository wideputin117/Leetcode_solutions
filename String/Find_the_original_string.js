/**
 * @param {string} word
 * @return {number}
 */
/** Leetcode:3330  Find the original typed string  */
var possibleStringCount = function(word) {
     let splittedString = word.split("")
     let count =1
  console.log(splittedString)
  for(let i=0;i<splittedString.length-1;i++){
    if(splittedString[i]==splittedString[i+1]){
      count +=1
    }
  }
  console.log("the count is",count) 
  return count 

};

console.log(possibleStringCount("abbcccc"))