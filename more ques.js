// for even number 

function even(arr){
    
    for(let i = 0 ; i <= arr.length-1; i++){
        if(arr[i] % 2 == 0){
         console.log(`It is even ${arr[i]}`);
        }
      
    }
   
}

console.log(even([3,1,5,8,2,4,6]))