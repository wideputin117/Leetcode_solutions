// Counting bits in a program

let decimal = 124;
let binary = decimal.toString(2);
console.log(binary)

let bitCount=(n)=>{
    let binary;
    let count=0;
    if(n<0){
     binary = (n >>> 0).toString(2);
    }else{
     binary = n.toString(2)
   }
   for(let i =0; i < binary.length; i++){
    if(binary[i]=="1"){
        count += 1;
    }
   }
   return count;
}
console.log(bitCount(128))
