/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  if (n === 0) return 0;
  const res = [0, 0];
  let flag = false;
  for (let i = 2; i < n; i++) {
    // check if n is a prime
    for (let j = 2; j < i; j++) {
      if (j * j > i) break;
      if (i % j === 0) {
        res[i] = res[i - 1];
        flag = true;
        break;
      }
    }
    if (!flag) {
      res[i] = res[i - 1] + 1;
    }
    flag = false;
  }
  return res[n - 1];
};

console.log(countPrimes(21));
