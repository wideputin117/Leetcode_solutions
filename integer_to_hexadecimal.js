var toHex = function(num) {
    if (num === 0) return '0';

    let hexMap = {
      0: '0', 1: '1', 2: '2', 3: '3',
      4: '4', 5: '5', 6: '6', 7: '7',
      8: '8', 9: '9', 10: 'a', 11: 'b', 
      12: 'c', 13: 'd', 14: 'e', 15: 'f'
    };
  
    let intToHex = '';
    
    // Handle negative numbers by using a 32-bit unsigned integer representation
    if (num < 0) {
      num = 0xFFFFFFFF + num + 1; // Convert to 32-bit unsigned integer
    }
  
    while (num > 0) {
      let remainder = num % 16;
      intToHex = hexMap[remainder] + intToHex;
      num = Math.floor(num / 16);
    }
  return intToHex
};

// toHex(960)
console.log(toHex(960))