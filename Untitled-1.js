// function to check for palindrome using two pointer

var palindrome = (str)=>{
  let left = 0;
  let right = str.length-1;

  // while left will be less than right

  while(left <= right){
    if(str[left] !== str[right]){
        return false;
    }
    left++;
    right--;
    return true;
  }
   
}

console.log(palindrome("mracecarm"))