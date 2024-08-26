/**You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.
Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2. */

var arrangeCoins = function(n) {
  // will use Binary Search to solve this problem
  let left= 0;
  let right= n;
  
  while(left <= right){
    let mid = Math.floor(left + ((right-left)/2));
   let val = mid *(mid+1)/2;
    if(val === n){
        return val;
       }else if(val< n){
        left = mid +1;
       }
       else{right = mid-1;

       }
  }
  return left-1
};

console.log(arrangeCoins(8))