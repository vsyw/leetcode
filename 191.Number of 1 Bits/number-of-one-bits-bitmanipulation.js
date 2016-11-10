/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let ones = 0;
  while (n) {
    ones += (n & 1);
    n = n >>> 1;
  }
  return ones;
};

console.log(hammingWeight(11));
