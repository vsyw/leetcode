/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const dp = [0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      dp[i] = dp[i - 1] + prices[i] - prices[i - 1];
    } else {
      dp[i] = 0;
    }
  }
  console.log(dp);
  return Math.max(...dp);
};

console.log(maxProfit([7,1,5,3,6,4]));
