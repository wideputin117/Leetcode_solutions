// to check for if a string is an palindrom e

function checkPalindrom(string) {
    let newString = string.length;
    for(let i = 0; i < newString/2; i++) {
        if(string[i] === string[newString-1-i]){
            return true
        }
         
        }
        
        return false;
}
 let ans = checkPalindrom("MaM");
 
 if(ans){
    console.log(ans);
 }else{
    console.log("No palindrome")
 }


/*
function isPalindrome1(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  var str = "racecar";
  if (isPalindrome1(str)) {
    console.log("The string is a palindrome!");
  } else {
    console.l} */