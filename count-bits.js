// Counting bits in a program
 

let bitCount=(n)=>{
    let binary;
    let count=0;
    if(n<0){
     binary = (n >>> 0).toString(2);
    }else{
     binary = n.toString(2);
    //  binary= binary.split("");
    //  console.log(binary)
   }
   for(let i =0; i < binary.length; i++){
    if(binary[i]==="1"){
        count += 1;
    }
   }
   return count;
}
console.log(bitCount(900))
