/**
 * @param {number[][]} triangle
 * @return {number}
 */
// reference https://siddontang.gitbooks.io/leetcode-solution/content/dynamic_programming/triangle.html

const minimumTotal = function (triangle) {
  if (triangle.length <= 0) return 0;
  const dp = triangle[triangle.length - 1];
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }
  return dp[0];
};

console.log(minimumTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]));