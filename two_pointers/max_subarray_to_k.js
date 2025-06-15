    /** this solution is the most optimal when array only contains 0 and positive integers */
    
    function longestSubarray(nums, k) {
        let sum=nums[0]
        let left= 0, right=0
        let maxLength=0
        let n= nums.length

        while(right <n){
            while(left<=right && sum>k){
                sum-=nums[left]
                left++
            }
            if(sum==k){
                maxLength = Math.max(maxLength,right-left+1)
            }
            
            right++
            if(right<n){
                 sum+=nums[right]
            }
        }
    return maxLength
    }


    console.log(longestSubarray(nums = [10, 5, 2, 7, 1, 9],  k=15))


    /** this is the most optimal when we have negative integers also */
    class Solution {
    longestSubarray(nums, k) {
        let prefixSum =0;
       let maxLength=0
       let cumSumMap = new Map()
       cumSumMap.set(0,-1);
       
       for(let i=0; i < nums.length; i++){
           prefixSum += nums[i]
           if(prefixSum == k){
               maxLength = i+1;
           };
           
           if(cumSumMap.has(prefixSum-k)){
               maxLength = Math.max(maxLength , i-cumSumMap.get(prefixSum-k))
           }
           
           if(!cumSumMap.has(prefixSum-k)){
               cumSumMap.set(prefixSum,i)
           }
           
       }
       return maxLength
    }
}

