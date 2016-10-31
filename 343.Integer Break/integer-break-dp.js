/**
 * @param {number} n
 * @return {number}
 * http://www.cnblogs.com/grandyang/p/5411919.html
 */
const integerBreak = function (n) {
  const dp = [0, 0, 1, 2, 4, 6, 9];
  for (let i = 7; i <= n; i++) {
    dp.push(3 * dp[i - 3]);
  }
  return dp[n];
};
