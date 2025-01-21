/** questin link- https://leetcode.com/problems/reverse-integer/submissions/1514823196/ */


var reverse = function(x) {
 let min = Math.pow(-2,31)
 console.log(min)
 let max = Math.pow(2,31)-1
 console.log(max)     
let ans =0;
 while(x !== 0){
    let y = x % 10;
    console.table(y)
    if(x <0 && y >0){
        y = y - 10;
    };
    if(ans < Math.floor(min/10+1) ||  ans > Math.floor(max/10)){
        return 0;
    };
    ans = ans * 10 + y ; // adding to the ans
    x = (x - y)/10 // updating x
 }
 return ans
};
console.log(reverse(-1463847412))