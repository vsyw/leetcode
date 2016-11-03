/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0 && j !== 0) {
        console.log('fuck');
        grid[i][j] += grid[i][j - 1];
        continue;
      }
      if (j === 0 && i !== 0) {
        console.log('shit');
        grid[i][j] += grid[i - 1][j];
        continue;
      }
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  // console.log(grid);
  return grid[row - 1][col - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
