/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// const kthSmallest = function (matrix, k) {
//   const n = matrix.length;
//   if (n === 0) return 0;
//   if (k === 0) return matrix[0][0];
//   if (k <= n) {
//     return matrix[0][k - 1];
//   }
//   return matrix[Math.floor(k % n)][k % n - 1];
// };

const kthSmallest = function (matrix, k) {
  const sortedArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sortedArray.push(matrix[i][j]);
    }
  }
  sortedArray.sort((a, b) => a - b);
  return sortedArray[k - 1];
}

console.log(kthSmallest([
  [1,2],
  [1,3]
], 2));