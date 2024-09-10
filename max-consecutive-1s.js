/**Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 */

var findMaxConsecutiveOnes = function(nums) {
  let maxCount =0;
  let count = 0;
   let left = 0;
   while(left < nums.length){
    if(nums[left]==1){
        count += 1;
        maxCount = Math.max(maxCount, count)
    }else if(nums[left]== 0){
             count=0
   }
        left++
    }
  return maxCount
};

console.log(findMaxConsecutiveOnes([1,0,1,1,1,0,1]))