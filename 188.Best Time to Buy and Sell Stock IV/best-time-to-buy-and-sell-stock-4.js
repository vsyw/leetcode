/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 * references: https://www.hrwhisper.me/leetcode-best-time-to-buy-and-sell-stock-i-ii-iii-iv/
 */
const maxProfit2 = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] >= 0) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

const maxProfit = function (k, prices) {
  const len = prices.length;

  if (k >= Math.floor(len / 2)) return maxProfit2(prices);
  const t = new Array(k + 1);
  for (let i = 0; i < t.length; i++) {
    t[i] = new Array(len).fill(0);
  }
  for (let i = 1; i <= k; i++) {
    let tmpMax = -prices[0];
    for (let j = 1; j < len; j++) {
      t[i][j] = Math.max(t[i][j - 1], prices[j] + tmpMax);
      tmpMax = Math.max(tmpMax, t[i - 1][j - 1] - prices[j]);
    }
  }
  return t[k][len - 1];
};

console.log(maxProfit(2, [3, 10, 5, 9, 12, 8, 10]));
