var pivotIndex = function(nums) {
    let totalSum = nums.reduce((accumulated,curval)=>accumulated+curval,0)
    console.log(totalSum)
    let currentSum = 0
    for(let i=0;i<nums.length;i++){
       currentSum += nums[i]
       console.log(`For Each Iteration`,currentSum)
       if(currentSum == totalSum-(currentSum-nums[i])){
        return i
       }
    }
    return -1
};
console.log(pivotIndex(nums = [2,1,-1]))
//ans 3