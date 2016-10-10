/**
 * @param {number[]} prices
 * @return {number}
 * references: http://liangjiabin.com/blog/2015/04/leetcode-best-time-to-buy-and-sell-stock.html
 */
const maxProfit = function (prices) {
  const preProfit = new Array(prices.length).fill(0);
  const postProfit = new Array(prices.length).fill(0);
  
  let curMin = prices[0];
  for (let i = 1; i < prices.length; i++) {
    curMin = Math.min(prices[i], curMin);
    preProfit[i] = Math.max(preProfit[i - 1], prices[i] - curMin);
  }
  
  let curMax = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    curMax = Math.max(prices[i], curMax);
    postProfit[i] = Math.max(postProfit[i + 1], curMax - prices[i]);
  }
  
  let maxRes = 0;
  for (let i = 0; i < prices.length; i++) {
    maxRes = Math.max(maxRes, preProfit[i] + postProfit[i]);
  }
  return maxRes;
};

console.log(maxProfit([1, 2, 3, 8, 2, 9, 3, 10]));
