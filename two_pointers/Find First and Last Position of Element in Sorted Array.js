var searchRange = function(arr, target) {
    for(let i=0;i< arr.length;i++){
      if(arr[i]== target){
        for(let j= arr.length-1;j>=0;--j){
          if(arr[j]==target){
            return [i,j]
          }
        }
      }
      
     }
     return [-1,-1]
};

console.log(searchRange(arr = [5,7,7,8,8,10], target = 8))