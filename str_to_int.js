// return integer from string


var myAtoi =function(s){
     let index = 0;
     let isNeg =  false;
     let res = 0;
  
  // first edge case
     // first to check if theres any leading whitespaces

  for(let i = index; i< s.length; i++){
    if(s[i] === " "){
        index++;
    }
    else{
        break;
    }
  }
  
  // second edge case

  if(s[index] == "-" || s[index] == "+"){
    // to check for negative sign
    isNeg = s[index] == "-";
    index++;
  }

  // last loop step
  for(let i = index ; i< s.length; i++){
    let num = s.charCodeAt(i) - 48;
   if(num < 0 || num > 9) break; 
   res *= 10;
   res += num;
  }
  if(isNeg){
    res = -res;
  }

  // binding to the limits

  let min = -(2**31);
  let max = 2**31-1;

  let minima = Math.min(max, res)

  return Math.max(minima, min);

}
console.log(myAtoi("91"))
 