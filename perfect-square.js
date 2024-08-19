/** A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt. */

var isPerfectSquare = function(num) {
  // will use binary search
  let left=1;
  let right=num;
  while(left <= right){
    let mid = Math.floor(left+(right-left)/2);
    let square = mid*mid;
    if(square === num){
        return mid;
    }else if(square > num){
        right =mid-1;
    }else{
        left =mid+1;
    }
  }  
  return false

};

console.log(isPerfectSquare(12))