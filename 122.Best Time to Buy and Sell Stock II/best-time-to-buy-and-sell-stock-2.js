/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let profit = 0;
  let cur = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] >= 0) {
      cur += prices[i] - prices[i - 1];
      continue;
    } else {
      cur = 0;
    }
    console.log(i, cur);
    profit += cur;
  }
  return profit;
};

console.log(maxProfit([4, 7, 3, 5, 9]));
