/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const res = new Array(m);
  for (let i = 0; i < m; i++) {
    res[i] = new Array(n).fill(1);
  }
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  return res[m - 1][n - 1];
};

console.log(uniquePaths(3, 3));
