/* Top frequent k elements */

function topKFrequent(nums, k) {
    let result =[]
    let map = new Map()

    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }

    const frequencyArr = Array.from(map)
    // console.log(frequencyArr)
    frequencyArr.sort((a,b)=>b[1]-a[1])

    for(let i=0; i<k;i++){
        result.push(frequencyArr[i][0])
    }
    return result
    // if(nums.length <=2){
    //     return nums
    // }
    // for(let i=0;i<nums.length;i++){
    //     if(map.has(nums[i])){
    //         map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    //         let count = map.get(nums[i])
    //         if(count >= k){
    //             result.push(nums[i])
    //         }
    //     } else {
    //         map.set(nums[i], 1);
    //     }
    // }
    //  return Array.from(new Set(result))
}


// console.log(topKFrequent(nums = [1,2,2,3,3,3], k = 2))
console.log(topKFrequent(nums = [1,2,1,2,1,2,3,1,3,2], k = 2))