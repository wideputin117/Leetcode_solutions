// to find and remove duplicates from arr

function arrDuplicates(arr) {
    let duplicate = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          duplicate.push(arr[i]);
        }
      }
    }
    return duplicate;
  }
  
  console.log(arrDuplicates([2, 1, 4, 3, 2, 3, 1]));