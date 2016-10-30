/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  if (p.length <= 0) return [];
  const map = new Array(128).fill(0);
  for (let i = 0; i < p.length; i++) map[p[i].charCodeAt(0)]++;
  let beg = 0;
  let end = 0;
  let count = p.length;
  const res = [];
  while (end < s.length) {
    if (map[s[end++].charCodeAt(0)]-- >= 1) count--;
    if (count === 0) res.push(beg);
    if (end - beg === p.length && map[s[beg++].charCodeAt(0)]++ >= 0) {
      count++;
    }
  }
  return res;
};

console.log(findAnagrams('', 'abc'));
