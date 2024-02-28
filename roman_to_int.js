// from roman to integer

var romanToInteger= (s)=>{
    const symbols= {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let total= 0;
 //  TO FIND THE NO WE USE TWO POINTER METHOD
 for(let i=0 ; i<s.length; i++){
    
    // compare  values at i and its next value
    let curr = s[i];
    let next = s[i+1];

    // 
    if(symbols[curr]< symbols[next]){
       total -= symbols[curr];

    }else{
    total += symbols[curr];
    }

 }

 return total;


}

console.log(romanToInteger('IV'));