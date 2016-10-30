/**
 * @param {string} str
 * @return {number}
 */
const MAX_INT = 2147483647;
const MIN_INT = -2147483648;

const myAtoi = function (str) {
  const s = str.trim();
  let sign = 1;
  let base = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && (s[i] === '+' || s[i] === '-')) {
      if (s[i] === '-') sign = -1;
      continue;
    }
    if (s[i] >= '0' && s[i] <= '9') {
      if (base > MAX_INT / 10 ||
        (base === Math.floor(MAX_INT / 10) && s[i] - '0' > 7)) {
        if (sign === 1) return MAX_INT;
        else {
          return MIN_INT;
        }
      }
      base = base * 10 + (s[i] - '0');
    } else {
      break;
    }
    // console.log(s[i], base);
  }
  return base * sign;
};

console.log(myAtoi('--1234'));
