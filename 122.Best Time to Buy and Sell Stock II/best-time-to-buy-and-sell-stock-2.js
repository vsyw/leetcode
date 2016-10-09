/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] >= 0) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

console.log(maxProfit([4, 7, 3, 5, 9]));
