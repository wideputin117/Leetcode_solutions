        /**You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

  */

var canWinNim = function(n) {
  // WILL HAVE TO FIRST     CHECK IF THE no is multiple of 4
  // pattern is to find multiple of 4 if its multiple of 4 then i will not win but if it is not a multiple of 4 then i will win and edge cases are already taken in account */
  if(n>0 &&  n <=3){
    return true;
  } 
  if(n % 4 !== 0){
   return true 
  }  
  return false
};

console.log(canWinNim(4))
console.log(canWinNim(5))