var summaryRanges = function(nums) {
   // will use two pointer method
function formatNumber(start, end){
    return start ===end ? `${nums[start]}`: `${nums[start]}->${nums[end]}`
}

   let j=0;
   let ranges=[]
   for(let i=0;i<nums.length;i = j+1){
   j=i;
   console.log(j)
   // will run while loop till the ranges are occuring
   while(j+1<nums.length && nums[j+1] == nums[j]+1){
    ++j;
    }
 ranges.push(formatNumber(i,j))
   }
   return ranges
};

console.log(summaryRanges([0,2,3,4,6,8,9,11]))