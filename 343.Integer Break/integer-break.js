/**
 * @param {number} n
 * @return {number}
 * http://www.cnblogs.com/grandyang/p/5411919.html
 */
const integerBreak = function (n) {
  if (n === 2 || n === 3) return n - 1;
  let res = 1;
  while (n > 4) {
    res *= 3;
    n -= 3;
  }
  return res * n;
};