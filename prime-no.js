let checkPrime=(num)=>{
    let flag =1;

    for(let i  =2; i<=num/2;i++){
        if(num % i==0){
            flag =0;
            break;
        }
    }
    if(flag){
        return num
    }else{
        return "It is not Prime"
    }
}
let arr = [1,3,2,7,9,3,2,1,11,5,77,9,33,2,37];
let forAll = arr.map(num=>checkPrime(num))
console.log(forAll);
console.log(checkPrime(3));
console.log(checkPrime(4));