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
  let chars = new Set([...s]);
  chars = [...chars];

  for (let i = 0; i < chars.length; i++) {
    if (charCount(s, chars[i]) < k) {
      const splitted = s.split(chars[i]);
      return Math.max(...splitted.map((str) => {
        return longestSubstring(str, k);
      }));
    }
  }
  return s.length;
};

console.log(longestSubstring('aaabb', 3));
