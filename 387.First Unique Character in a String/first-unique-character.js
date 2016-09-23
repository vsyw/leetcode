/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let unique = true;
    for (let j = 0; j < s.length; j++) {
      if (i === j) continue;
      if (s[i] === s[j]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('abccdab'));