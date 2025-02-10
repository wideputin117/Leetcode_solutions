/*
11. Container With Most Water
Link : https://leetcode.com/problems/container-with-most-water/descri

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/


/**
 * Approach
 * Reason for using the smaller height:
The water level that can be contained between two lines is limited by the shorter line. If we were to consider the taller line, the water would overflow beyond the shorter one, making it invalid.

Example:
Consider the height array [1, 2], where we have two lines:

arduino
Copy
Edit
1       (height = 1)
2       (height = 2)
If we choose both lines:

Left index (height = 1)
Right index (height = 2)
The possible area is:

Width
=
1
(
right
−
left
)
Width=1(right−left)
Height
=
min
⁡
(
1
,
2
)
=
1
Height=min(1,2)=1
Area
=
1
×
1
=
1
Area=1×1=1
If we incorrectly chose the taller height, the formula would wrongly assume water can be contained up to 2, which is not possible since the shorter height limits the boundary.

Key Insight:
If we select the taller height, it assumes that water can fill up to that level, which is incorrect because the shorter height restricts the water level. Therefore, we always consider the minimum height, ensuring the water is fully contained. 
 */
var maxArea = function(height) {
 
     
let left =0;
let right = height.length-1;
let maximamArea=0;
 
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