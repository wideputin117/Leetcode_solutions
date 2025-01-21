/*
11. Container With Most Water
Link : https://leetcode.com/problems/container-with-most-water/descri

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/


var maxArea = function(height) {
 
     
let left =0;
let right = height.length-1;
let maximamArea=0;
// if(height.length == 2){
//     return Math.min(...height)
// }
while(left < right){
    let ans = (right-left) * Math.min(height[left], height[right]);
    maximamArea = Math.max(ans, maximamArea)
  if(height[left] < height[right]){
    left++
  }else{
    right--
  }
}
return maximamArea
 
};

console.log(maxArea([1,2]))