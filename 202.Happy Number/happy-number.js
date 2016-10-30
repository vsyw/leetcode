/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const map = {};
  while (!map[n] && n !== 1) {
    map[n] = n;
    let tmp = 0;
    n.toString().split('').forEach((item) => {
      tmp += item * item;
    });
    n = tmp;
  }
  return n === 1;
};

console.log(isHappy(19));
