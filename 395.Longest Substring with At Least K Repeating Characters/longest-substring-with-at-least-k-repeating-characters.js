/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const charCount = function (str, char) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) res++;
  }
  return res;
};

const longestSubstring = function (s, k) {
  const chars = new Set([...s]);
  
  for (const c of chars) {
    if (charCount(s, c) < k) {
      const splitted = s.split(c);
      return Math.max(...splitted.map((str) => {
        return longestSubstring(str, k);
      }));
    }
  }
  return s.length;
};

console.log(longestSubstring('aaabb', 3));
