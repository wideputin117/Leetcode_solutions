/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
     let m = matrix.length;
       let n = matrix[0].length;
       let flag = false
       console.log('the m and n are', m,n)
       for(let i=0;i<m;i++){
         for(let j=0;j<n;j++){
           if(matrix[i][j]===0){
             markRow(i)
             markCol(j)
             flag=true
           }
         }
       }
       if(!flag){
        return matrix
       }       
       function markRow(arg){
         for(let j=0; j<n;j++){
           if(matrix[arg][j] != 0){
             matrix[arg][j]=-1
           }
         }
       }
      function markCol(j){
         for(let i=0; i<m;i++){
           if(matrix[i][j] != 0){
             matrix[i][j]=-1
           }
         }
       }

       /** in this loop will mark all the -1 with */
       for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
          if(matrix[i][j]== -1){
            matrix[i][j]=0
          }
        }
       }
       return matrix
};