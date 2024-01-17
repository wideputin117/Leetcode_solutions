// find square root of an number using newton raphsons method

function newtonSquare(){ // x = is approximate value and n = is the number
   let x, n =25;
    x = n;
    
    for(let i =0; i < 10; i++){
        x = (x+ n/x)/2;
    }

    console.log(x);

}

newtonSquare();