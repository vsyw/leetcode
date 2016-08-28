/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function (num) {
  let res = num;
  if (num === 1) return true;
  while (res > 4) {
    res = res / 4;
    if (!Number.isInteger(res)) return false;
  }
  return res === 4 ? true : false;
};

console.log(isPowerOfFour(1));