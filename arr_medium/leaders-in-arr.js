/** Leaders in an array TUF array medium question */



function leaders(nums) {
     let n = nums.length-1
     let currentHighest = nums[n]
     
       let leaders = []
       leaders.push(currentHighest)
       
       for(let i= n; i >=0;i--){
         if(nums[i]>currentHighest){
           leaders.unshift(nums[i])
           currentHighest = nums[i]
         }
       }
       return leaders
    }
    
    console.log(leaders([1, 2, 5, 3, 1, 2]))