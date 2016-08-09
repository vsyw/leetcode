/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) return 0;
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2); // avoid overfload
    if (mid * mid > x) {
      right = mid - 1;
    }
    else {
      if ((mid + 1) * (mid + 1) > x) return mid;
      left = mid + 1;
    }
  }
};


console.log(mySqrt(5));
