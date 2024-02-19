function stringToRoman(num) {
    // array of values 
    const values =         
        [1000, 900, 500, 400, 100,  
         90, 50, 40, 10, 9, 5, 4, 1];
    // array of symbols 
    const symbols =  
        ['M', 'CM', 'D', 'CD', 'C',  
         'XC', 'L', 'XL', 'X', 'IX',  
         'V', 'IV', 'I'];
    
     // result to store the value 
    let result = ''; 
  
    for (let i = 0; i < values.length; i++) { 
        //console.log(values[i])
        while (num >= values[i]) { 
            result += symbols[i];
            console.log(symbols[i]);
            num -= values[i]; 
        } 
    } 
  
    return result; 
} 
  
const input = "2000"; 
const result = stringToRoman(parseInt(input)); 
console.log(result);