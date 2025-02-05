/*506. Relative Ranks
Easy
Topics
Companies
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.
*/

var findRelativeRanks = function(score) {
  let newString = []
//   console.log(newString.length)
  const descendedSortedArr = score.toSorted((a,b)=>b-a)
  console.log(score)
//   console.log(descendedSortedArr)
  let mappedPosition = new Map()
  for(let i =0 ; i < score.length;i++){
    mappedPosition.set(descendedSortedArr[i],i) // kwy value
  }
  let index = 0
  for(let i = 0 ; i< score.length; i++){
    let value = mappedPosition.get(score[i]) // getting the index by using value at index of score and using it as an key to get the value stored in mappedPosition.
    if(value==0){
        newString[i]= "Gold Medal"
    }else if(value==1){
        newString[i]="Silver Medal"
    }else if(value==2){
        newString[i]="Bronze Medal"
    }else{
        newString[i] = ""+(value+1)
    }
  }
  
  console.log(newString)
};
findRelativeRanks([10,3,8,9,4])