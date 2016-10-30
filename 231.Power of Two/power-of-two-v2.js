/**
 * @param {number} n
 * @return {boolean}
 */

// using bit manipulation
const isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(8));
