//  
var remove=(nums,value)=>{
     // 1. have to remove the value from nums
     // 2. have to return the length after the removal of the value from nums
     let len = nums.length;
     for(let i=0; i< len; i++){
        if(nums[i]=== value){
            nums.splice(i,1);
            i -=1;
        }
     }
     return nums
    }

    console.log(remove([0,1,2,2,3,2,0,4,2],2));