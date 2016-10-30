/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  while (n && n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
};

console.log(isPowerOfTwo(8));
