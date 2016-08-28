/**
 * @param {number} num
 * @return {boolean}
 * https://www.hrwhisper.me/leetcode-power-four/
 */
const isPowerOfFour = function (num) {
  return (num > 0) && (num & (num - 1) === 0) && (num & 0x55555555);
}

console.log(isPowerOfFour(0));