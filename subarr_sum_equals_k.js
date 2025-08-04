   function subarraySum(nums, k) {
      //  let count = 0;
      //  let currentSum =0
      //  let  map  = new Map()
      //  map.set(0,1)
      //  for(let i=0; i<nums.length; i++){
      //      currentSum += nums[i]
      //    //   console.log(currentSum)
      //       // if(map.get(currentSum-k)){
      //       count += map.get(currentSum-k) || 0
      //    //   }
      //      map.set(currentSum, (map.get(currentSum)||0)+1)
           
      //  }
      // return count

        let count = 0;
       let currentSum =0
       let  map  = new Map()
       map.set(0,1)
       for(let i=0; i<nums.length; i++){
           currentSum += nums[i]
         //   console.log(currentSum)
            // if(map.get(currentSum-k)){
            count += map.get(currentSum-k) ||0 
        //    }
           map.set(currentSum, (map.get(currentSum)||0)+1)
           
       }
      return count
    }

    console.log(subarraySum(nums = [1, 2, 3], k = 3))