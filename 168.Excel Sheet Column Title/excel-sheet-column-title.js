/**
 * @param {number} n
 * @return {string}
 */
const baseCode = 65; // 'A'.charCodeAt(0) = 65

const convertToTitle = function (n) {
  let res = '';
  while (n) {
    res = String.fromCharCode(baseCode + (n - 1) % 26) + res;
    n = Math.floor((n - 1) / 26);
  }
  return res;
};

console.log(convertToTitle(26));
