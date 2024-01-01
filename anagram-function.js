function anagram(val1, val2){
    let newval = val1.split('');
    let newval2 = val2.split('');
    newval = newval.sort((a,b)=>a-b);
    newval2 = newval2.sort((a,b)=>a-b);
    if(newval.length != newval2.length){
        return false;
    }
   for(let i = 0; i< newval.length; i++){
        if(newval[i] != newval2[i]){
            return false;
        }
        return true;
   }
}

console.log(anagram("manish","mahnis"))