/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  if (numRows <= 0) return [];
  const res = [[1]];
  for (let i = 2; i <= numRows; i++) {
    const tmp = [1];
    for (let j = 1; j < i - 1; j++) {
      tmp.push(res[i - 2][j - 1] + res[i - 2][j]);
    }
    tmp.push(1);
    res.push(tmp);
  }
  return res;
};

console.log(generate(5));
