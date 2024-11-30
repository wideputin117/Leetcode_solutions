/** implementing selection sort */
const selectionSort =(arr)=>{
    for(let i=0; i< arr.length-1;i++){
        let minIndex = i;  // taking i as min index

        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j ; // if the i the index i.e minindex is more than jth index assign the jth index to minindex
            }
        }
        // flip both the values
        [arr[i],arr[minIndex]]= [arr[minIndex],arr[i]]
    }
    return arr
}

console.log(selectionSort([3,2,1,6,9,4,6]))