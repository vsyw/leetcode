/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 9;
  for (let i = 2; i <= Math.min(n, 10); i++) {
    dp[i] = 9;
    for (let j = 9; j >= 9 - i + 2; j--) {
      dp[i] = dp[i] * j;
    }
  }
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += dp[i];
  }
  return ans;
};

console.log(countNumbersWithUniqueDigits(5));
