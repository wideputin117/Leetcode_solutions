var longestConsecutive = function(nums) {
    // let left =1
    // let n = nums.length
    // nums.sort((a,b)=>a-b)
    // console.log(nums)
    // let maxCount = 0
    // let count =1
    // while(left <n){
    //     if(nums[left]- nums[left-1]==1){
    //       count +=1
    //       console.log(`the count:${left}`,count)
    //     }
    //      left++
    // }
    // return count

/** optimal approach */

const set = new Set(nums)
console.log(set)
let ans =0

for( let num of set){
    if(!set.has(num-1)){
        let y = num+1
        console.log(num)
        while(set.has(y)){
            y+=1
         }
        ans = Math.max(ans,y-num)
    }
}
return ans

};
/** 7 is ans */
console.log(longestConsecutive(nums = [9,1,4,7,3,-1,0,5,8,-1,6]))