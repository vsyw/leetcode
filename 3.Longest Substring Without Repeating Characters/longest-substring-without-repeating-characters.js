/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const map = new Array(128).fill(0);
  let count = 0;
  let beg = 0;
  let end = 0;
  let d = 0;
  while (end < s.length) {
    if (map[s[end++].charCodeAt(0)]++ > 0) count++;
    while (count > 0) {
      // console.log(beg);
      if (map[s[beg++].charCodeAt(0)]-- > 1) count--;
    }
    d = Math.max(d, end - beg);
    console.log(beg, end, d);
  }
  return d;
};

console.log(lengthOfLongestSubstring('bacabaa'));
