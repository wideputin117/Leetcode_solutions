var repeatedSubstringPattern = function(s) {
  //1. concat the string with itself
  
  let newString = s+s;
  console.log("before",newString)
  newString = newString.slice(1,newString.length-1)
  console.log("after",newString)

  if(newString.includes(s)){
    return true
  }

  return false
//   console.log(newString)
};

console.table(repeatedSubstringPattern("abab"))
console.table(repeatedSubstringPattern("aba"))
// console.log(repeatedSubstringPattern("aaa"))