// reverse an arr

function reverseArr(arr){

    let length = arr.length;
        for(let i = 0 ;i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[length-i-1]
        arr[length-i-1] = temp;
        }
        return arr;
}

const ans = reverseArr([2,3,3,1,5,6])

console.log(ans)

// function to check for palindrome

function plaindrome(str){
    let length = str.length;
    // two pointer
    let left = 0;
    let right = length-1;
    while(left <= right){
      if(str[left] != str[right]){
        return false;
      }
      left++;
      right--;
    }
    return true;
     
}
console.log(plaindrome('mamn'));

// 