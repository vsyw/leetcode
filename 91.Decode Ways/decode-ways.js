/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const size = s.length;
  if (size === 0 || parseInt(s[0]) === 0) return 0;
  
  let dp = Array(size).fill(0);
  dp[size] = 1;
  dp[size - 1] = parseInt(s[size - 1]) === 0 ? 0 : 1;
  for (let i = size - 2; i >= 0; i--) {
    if (parseInt(s[i]) === 0) continue;
    else {
      dp[i] = parseInt(s.substr(i, 2)) <= 26 ? dp[i + 1] + dp[i + 2] : dp[i + 1];
    }
  }

  return dp[0];
};

console.log(numDecodings('10000001'));