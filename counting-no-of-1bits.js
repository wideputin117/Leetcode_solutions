/**Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10 */

var countBits = function(n) {
    let count=0;
    let bitCountArr=[];
    for(let i=0;i<=n;i++){
    let bitConversion= i.toString(2);
    bitConversion= bitConversion.split("");
    for(let j=0;j<bitConversion.length;j++){
        if(bitConversion[j]==="1"){
            count+=1;
        }
    }
    bitCountArr.push(count);
    count=0;
}    
return bitCountArr;
};

console.log(countBits(5))