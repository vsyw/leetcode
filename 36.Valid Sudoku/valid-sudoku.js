/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  // used1 for rows, used2 for columns, used3 for sub-boxes
  const used1 = [...Array(9)].map(() => [...Array(9)].fill(false));
  const used2 = [...Array(9)].map(() => [...Array(9)].fill(false));
  const used3 = [...Array(9)].map(() => [...Array(9)].fill(false));
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        const num = board[i][j].charCodeAt(0) - '0'.charCodeAt(0) - 1;
        const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (used1[i][num] === true || used2[j][num] === true || used3[k][num] === true) {
          console.log(i, j, num);
          return false;
        }
        used1[i][num] = used2[j][num] = used3[k][num] = true;
      }
    }
  }
  return true;
};

console.log(isValidSudoku(
  [".87654321","2........","3........","4........","5........",
  "6........","7........","8........","9........"]));

