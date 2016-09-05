/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0 || x % 10 === 0) return false;
  let sum = 0;
  while (sum < x) {
    sum = sum * 10 + x / 10;
    x = Math.floor(x / 10);
  }
  return (x === sum) || (x === sum / 10);
};
console.log(isPalindrome(12));