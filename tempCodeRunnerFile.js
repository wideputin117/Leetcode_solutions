function wealth(arr){
    var maxwealth = 0;
arr.forEach(element => {
        let currentWealth = 0;
        element.forEach(bank => {
            currentWealth += bank; 
        })
        maxwealth = Math.max(maxwealth, currentWealth);            
    });
    return maxwealth;
}

let answ = wealth([[2,3,4],[4,2,1]])
console.log(answ);

function wealth(arr) {
    let maxWealth = 0;
    arr.forEach(element => {
      let currentWealth = 0;
      element.forEach(bank => {
        currentWealth += bank;
      });
      maxWealth = Math.max(maxWealth, currentWealth);
    });
    return maxWealth;
  }
  
  let ans = wealth([[2, 3, 4], [4, 2, 1]]);
  console.log(ans);