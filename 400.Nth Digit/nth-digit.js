/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let len = 1;
  let count = 9;
  let start = 1;
  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }
  start += Math.floor((n - 1) / len);
  let t = start.toString();
  return parseInt(t[(n - 1) % len], 10);
};
