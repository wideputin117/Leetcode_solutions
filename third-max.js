/**
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

 */
/**
 * sort the arr
 * find the third largest by traversing from the length
 * if not found return the maximam
 */
var thirdMax = function(nums) {
     let uniqueNums = [...new Set(nums)]
     let len= uniqueNums.length;
     uniqueNums.sort((a, b) => a - b);
    
     if(uniqueNums.length<=2){
        return uniqueNums[len-1]
    }else{
        return uniqueNums[len-3]
    }
};
console.log(thirdMax([1,2,2,3]));
console.log(thirdMax([1,2,3,4]))