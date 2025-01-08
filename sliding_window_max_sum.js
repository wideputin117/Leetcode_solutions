const  maxSumSubArr =(arr,k)=>{
    let len = arr.length
    let sum = 0;
    let i=0, j=0
    let maximam=0;
    while(j<len){
        sum += arr[j]
        if(j-i+1 < k){
            j++;
        }else if(j-i+1 === k){
          maximam = Math.max(maximam, sum)
          sum -= arr[i]
          i++;
          j++;
          
        }
    }
    console.log(maximam)
}

maxSumSubArr([1,2,4,5,6,7,8,9,0],3)