// check for a single number 

let single=(arr)=>{
    let len = arr.length;

    for(let i=0; i < len; i++){
        if(arr.indexOf(arr[i])=== arr.lastIndexOf(arr[i])){
            return arr[i];
         } 
        
    }
    return -1

}

console.log(single([4,1,2,1,4,3,3,2]))