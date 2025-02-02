/*The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.*/

const hammingDistance = (x,y)=>{
    let maxBits = Math.max(x, y).toString(2).length;
    console.log(maxBits)
    let bitx = x.toString(2).padStart(maxBits, '0').split("");
    let bity = y.toString(2).padStart(maxBits, '0').split("");
    console.log(bity, bitx)
    let count =0;
let left =0
let right =0
while(left<bitx.length && right<bity.length){
    if(bitx[left]=== bity[right]){
        left++
        right++
    }else if(bitx[left]!== bity[right]){
        count++
        right++
        left++
    }
}
return count
}
console.log(hammingDistance(93,73))
