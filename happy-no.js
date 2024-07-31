var isHappy = function(n) {
     
    while(n>= 1){
   
    let splitN = n.toString().split("");
     
    console.log(splitN);
    // if(n==1){
    //     return true;
    // }else{n = Math.pow(parseInt(splitN[0]),2)
    // }console.log(n)
    for(let i=0;i< splitN.length;i++){
        if(n===1){
            return true;
        }else{
            n += Math.pow(splitN[i],2);
            console.log(n)
        }
    }
     
}
return false;
 
 
};

console.log(isHappy(2))