/** greedy algorithm */

var lemonadeChange = function(bills) {
      let fiveCount=0
  let tenCount=0

  for(let i=0;i<bills.length;i++){
    if(bills[i]==5){
        fiveCount +=1
    }if(bills[i]==10){
        fiveCount -=1
        tenCount+=1
    }
    if(bills[i]==20){
      if(tenCount <= 0){
        fiveCount -=3
      }else{
        tenCount-=1
        fiveCount -=1
      }
    }
console.log(bills[i])
  }
 
  return fiveCount >=0 ? true: false
    
};

console.log(lemonadeChange(bills = [5,5,10,20]))