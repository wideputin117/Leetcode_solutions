// find an element in an arr

function findElement(arr,element) {
    let target = element;
    for(let i = 0; i < arr.length; i++) {
        if(target === arr[i]){
            return arr[i];
        }

    }
    return false;
}
console.log(findElement([2,3,5,4,2,0], 0))