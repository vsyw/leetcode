/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  // console.log(n);
  return (n % 2 === 0) ? myPow(x * x, Math.floor(n / 2)) : x * myPow(x * x, Math.floor(n / 2));
};

console.log(myPow(34.00515, -3));

//34.00515
//-3