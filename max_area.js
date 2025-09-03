var maxArea = function(height) {
  let left =0;
  let right=height.length-1
  
  let maxArea=0
  while(left <=right){
    maxArea = Math.max(maxArea,Math.min(height[right],height[left])*(right-left))
    if(height[left]<height[right]){
        left++
    }else{
        right--
    }
   }
  return maxArea
};
console.log(maxArea(height = [1,1]))