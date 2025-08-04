/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
         let majorityElement = []
      let hashMap= new Map()
        let n = nums.length /3
      for(let i=0;i<nums.length; i++){
        if(hashMap.get(nums[i])){
            hashMap.set(nums[i], hashMap.get(nums[i])+1)
        }else{
            hashMap.set(nums[i], 1)
        }
      }

    for (let [key, value] of hashMap) {
        if (value > n) {
            majorityElement.push(key);
        }
        }
     return majorityElement
};
