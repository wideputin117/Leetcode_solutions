const insertionSort =(arr)=>{
    // will use two loop
    for(let i =1 ; i<arr.length ; i++){
        for(let j =i; j>=0;j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}

// console.log(insertionSort([2,3,5,1,9,4,2]))


const insertionSort2 = (arr2)=>{
    let i =1
    while(i<arr2.length){
        let j=i
        while(j>0){
            if(arr2[j]<arr2[j-1]){
                [arr2[j],arr2[j-1]] = [arr2[j-1],arr2[j]]
                
            }
            j--
        }
        i++
    }
    return arr2
}

console.log(insertionSort2([2,3,5,1,9,4,2]))