/**Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. */

/**Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9 */

/**    Link to approach  = https://algo.monster/liteproblems/42
 * 
 */

var trap = function(height) {
  let left = []
  let right = []
  let len = height.length
  left[0] =  height[0];
  right[len-1] =height[len-1];
  /** use two loops separate for left and right and store max of height and left  and right respectively to the end of left  and in the beginning of right */
  for(let i=1; i< len;i++){
    left[i] = Math.max(left[i-1],height[i])
  }  
  for (let i =len-2;i >=0;i--){
    right[i] = Math.max(right[i+1],height[i])
  }
let sum =0;
  for(let j=0;j<height.length;j++){
    sum+= Math.min(left[j],right[j])-height[j]
  }
  console.log(sum)
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])                   // Output: 9
  