/**
 * @param {number[][]} matrix
 * @return {number[]}
 * https://leetcodenotes.wordpress.com/2013/11/23/leetcode-spiral-matrix-%E6%8A%8A%E4%B8%80%E4%B8%AA2d-matrix%E7%94%A8%E8%9E%BA%E6%97%8B%E6%96%B9%E5%BC%8F%E6%89%93%E5%8D%B0/
 */

const spiralOrder = function (matrix) {
  const res = [];
  
  if (!matrix.length) return res;

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  // console.log(left, right, top, bottom);
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        console.log('if');
        res.push(matrix[bottom][i]);
      }
    }
    bottom--;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
    }
    left++;
    // left++;
    // right--;
    // top++;
    // bottom--;
  }
  
  // if (matrix.length === matrix[0].length && matrix.length % 2 !== 0) {
  //   console.log('shi');
  //   res.push(matrix[top][bottom]);
  // }

  return res;
};

console.log(spiralOrder(
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
));


