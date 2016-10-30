/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
  for (const p of [2, 3, 5]) {
    while (num && (num % p === 0)) num /= p;
  }
  return num === 1;
};

console.log(isUgly(14));
