/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let i=0
    let edge = nums[0]<nums[nums.length-1]? nums[nums.length-1] -nums[0]:nums[0]-nums[nums.length-1]   

    let max=0
    while(i<nums.length-1){
             max = Math.max(max,Math.abs(nums[i]-nums[i+1]))
        i++
    }
    return Math.max(max,edge)
};