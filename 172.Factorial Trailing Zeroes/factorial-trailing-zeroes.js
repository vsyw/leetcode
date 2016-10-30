/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
  return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(n / 5);
};
