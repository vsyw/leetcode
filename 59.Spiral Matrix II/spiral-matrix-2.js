/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  const res = new Array(n);
  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(n);
  }
  
  let k = 1;
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res[top][i] = k++;
    }
    for (let i = top; i < bottom; i++) {
      res[i][right] = k++;
    }
    for (let i = right; i > left; i--) {
      res[bottom][i] = k++;
    }
    for (let i = bottom; i > top; i--) {
      res[i][left] = k++;
    }
    top++;
    bottom--;
    left++;
    right--;
  }

  if (n % 2 !== 0) res[top][bottom] = k++;
  return res;
};

console.log(generateMatrix(1));
