/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let count = p.length;
  const res = [];
  const hash = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    hash[p[i].charCodeAt(0) - 97]++;
  }
  while (right < s.length) {
    if (hash[s[right++].charCodeAt(0) - 97]-- >= 1) {
      count--;
    }
    if (count === 0) res.push(left);
    if (right - left === p.length &&
      hash[s[left++].charCodeAt(0) - 97]++ >= 0) {
      count++;
    }
  }
  return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
