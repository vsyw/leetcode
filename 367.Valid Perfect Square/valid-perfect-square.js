/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  if (num === 0) return false;
  if (num === 1) return true;
  let left = 1;
  let right = num;
  while (left <= right) {
    const mid = Math.floor(right + (left - right) / 2);
    console.log(left, right, mid);
    if (mid * mid === num) return true;
    else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(104976));
