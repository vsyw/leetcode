/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let seq = ['1', '1'];
  let num = 0;
  for (let i = 2; i <= n; i++) {
    let index = 0;
    let rep = 0;
    num = seq[i - 1][0];
    let tmp = '';
    while (index < seq[i - 1].length) {
      if (num === seq[i - 1][index]) {
        rep++;
        index++;
      } else {
        tmp = tmp + rep + num;
        num = seq[i - 1][index];
        rep = 1;
        index++;
      }
    }
    seq[i] = tmp + rep + num;
  }
  return seq[n];
};

console.log(countAndSay(5));
