/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProf = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    if (prices[i] - minPrice > maxProf) {
      maxProf = prices[i] - minPrice;
    }
  }
  return maxProf;
};

console.log(maxProfit([7,1,5,3,6,4]));
