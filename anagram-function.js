function anagram(val1, val2) {
    
    let newval1 = val1.split('');
    let newval2 = val2.split('');
  
    let newval3 = newval1.sort().join('');
    let newval4 = newval2.sort().join('');
    console.log(newval3, newval4);
    if (newval3.length !== newval4.length) {
      return false;
    }
  
    for (let i = 0; i < newval3.length; i++) {
      if (newval3[i] !== newval4[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(anagram("manish", "mahins"));    // should return true
