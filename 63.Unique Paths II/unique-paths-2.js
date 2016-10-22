/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  else {
    obstacleGrid[0][0] = 1;
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if(i === 0 && j === 0) continue;
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else if (i === 0) {
        obstacleGrid[i][j] = obstacleGrid[i][j - 1];
      } else if (j === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j];
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(uniquePathsWithObstacles([
  [0,1,0],
  [0,1,0],
  [0,0,0]
]));
