/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
 *
 * 逆時針翻轉圖片口訣：按 row 逆翻轉 array，對角線互換
 *
*/

const rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

const sampleInput = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotate(sampleInput));