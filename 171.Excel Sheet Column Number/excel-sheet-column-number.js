/**
 * @param {string} s
 * @return {number}
 */
const baseCharCode = 64;

const titleToNumber = function (s) {
  let res = 0;
  let factor = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    const tmp = factor * (s[i].charCodeAt(0) - baseCharCode);
    res += tmp;
    factor *= 26;
  }
  return res;
};

console.log(titleToNumber('AB'));
