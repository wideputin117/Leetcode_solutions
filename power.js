// calculating power of an number

function power(num, pow){
     let mult = num;
    for(let i= 1; i < pow; i++){
        mult *= num;
    }
    return mult;
}

const ans =  power(9,4);
 console.log(ans)


// function to find suqare root of an number

 