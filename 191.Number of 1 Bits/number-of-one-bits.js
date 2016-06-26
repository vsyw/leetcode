/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  if (n > 0) {
    return n % 2 === 1 ? 1 + hammingWeight(Math.floor(n / 2)) : hammingWeight(Math.floor(n / 2));
  } else {
    return 0;
  }
};

console.log(hammingWeight(11));
