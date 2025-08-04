    function majorityElementTwo(nums) {
      let majorityElement = []
      let hashMap= new Map()

      for(let i=0;i<nums.length; i++){
        if(hashMap.get(nums[i])){
            hashMap.set(nums[i], hashMap.get(nums[i])+1)
        }else{
            hashMap.set(nums[i], 1)
        }
      }

      for(let char of hashMap){
        console.log(char)
        if(char[1]>=3){
            majorityElement.push(char[0])
        }
      }
      console.log(majorityElement)
return majorityElement
    }

    console.log(majorityElementTwo([1,2,1,1,3,2]))