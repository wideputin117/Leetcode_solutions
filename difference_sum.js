/*
2894. Divisible and Non-divisible Sums Difference */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1=0
    let num2= 0

    for(let i =1;i<=n;i++){
        if(i%m != 0){
            num1 += i
        }else if(i%m ==0 ){
            num2+=i
        }
    }
    return num1-num2
};

console.log('the sum difference', differenceOfSums)