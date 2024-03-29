// find square root of an number using newton raphsons method

function newtonSquare(){ // x = is approximate value and n = is the number
   let x, n =69;
    x = n;
    
    for(let i =0; i < 100; i++){
        x = (x+ n/x)/2;
    }

    console.log(x);

}

newtonSquare();