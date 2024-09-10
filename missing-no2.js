// finding missing numbers from an array
let missingNum=  (arr)=>{

    let maxNum = Math.max(...arr);

    let  addNum = new Set();

    for(let i=1;i<= maxNum;i++){
        addNum.add(i)
    }


    // will use for of loop
    for(let char of arr){
        console.log(char)
        // addNum.delete(char)
    }
    console.log(Array.from(addNum))
}

missingNum([1, 2, 4, 6, 3])