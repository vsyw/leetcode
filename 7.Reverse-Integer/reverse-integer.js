/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let res = 0;
  while (x !== 0) {
    res = res * 10 + x % 10;
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    if (res > 2147483647 || res < -2147483648) {
      return 0;
    }
  }
  return res;
};
