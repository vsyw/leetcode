/**
 * @param {number} n
 * @return {string[][]}
 */
const isValid = function (record, row, col) {
  for (let i = 0; i < row; i ++) {
    if (record[i] === col ||
      Math.abs(row - i) === Math.abs(col - record[i])) {
      return false;
    }
  }
  return true;
};

const placeQueen = function (res, row, n, record) {
  if (row === n) {
    const sol = [];
    for (let i = 0; i < n; i++) {
      let tmp = '';
      for (let j = 0; j < n; j++) {
        tmp += record[i] === j ? 'Q' : '.';
      }
      sol.push(tmp);
    }
    res.push(sol);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isValid(record, row, i)) {
      record.push(i);
      placeQueen(res, row + 1, n, record);
      record.pop();
    }
  }
};

const solveNQueens = function (n) {
  const res = [];
  placeQueen(res, 0, n, []);
  return res;
};

console.log('ans', solveNQueens(10));
