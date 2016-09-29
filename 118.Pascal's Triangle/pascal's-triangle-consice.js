/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    res.push([]);
    res[i][0] = res[i][i] = 1;
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
};

console.log(generate(5));
