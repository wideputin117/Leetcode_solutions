function anagram(val1, val2){
    let newval1 = val1.split('');
   
    
    let newval2 = val2.split('');
    let newval3 = newval1.sort((a,b)=>a-b);
    let newval4 = newval2.sort((a,b)=>a-b);
    if(newval3.length != newval4.length){
        return false;
    }
    else{
   for(let i = 0; i< newval4.length; i++){
        if(newval3[i] !== newval4[i]){
            return false;
        }
        return true;
   }
}
}

console.log(anagram("manish","mahna1"))