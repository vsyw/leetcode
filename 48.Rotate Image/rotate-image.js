/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
 *
 * 口訣：陣列逆轉，對稱交換
 *
*/

const rotate = function (matrix) {
  const n = matrix.length;
  matrix.reverse();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

const sampleInput = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotate(sampleInput));
