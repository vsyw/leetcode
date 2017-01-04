/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
  const candies = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1]);
    }
  }
  // console.log(candies);
  return candies.reduce((a, b) => a + b);
};

console.log(candy([1, 2, 3, 4, 3, 2, 1]));
