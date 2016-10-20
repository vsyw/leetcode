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

const placeQueen = function (res, board, row, n, record) {
  if (row === n) {
    res.push(board.map((item) => item.join('')));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isValid(record, row, i)) {
      board[row][i] = 'Q';
      record.push(i);
      placeQueen(res, board, row + 1, n, record);
      record.pop();
      board[row][i] = '.';
    }
  }
};

const solveNQueens = function (n) {
  const res = [];
  // init the board
  const board = new Array(n);
  for (let i = 0; i < n; i++) board[i] = new Array(n).fill('.');
  
  placeQueen(res, board, 0, n, []);
  return res;
};

console.log('ans', solveNQueens(10));
