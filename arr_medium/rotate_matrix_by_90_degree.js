/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
      matrix.reverse()
     for(let i=0;i<matrix.length;i++){
       for(let j=0;j<i;j++){
         let temp = matrix[i][j]
         matrix[i][j]=matrix[j][i]
         matrix[j][i]=temp
       }
     }
      return matrix
};

console.log(rotate[[1,3,2],[2,4,1],[2,1,4]])