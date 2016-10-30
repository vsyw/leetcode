/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const map = new Array(128).fill(0);
  for (let i = 0; i < t.length; i++) map[t[i].charCodeAt(0)]++;
  let beg = 0;
  let end = 0;
  let counter = t.length;
  let d = Number.MAX_SAFE_INTEGER;
  let head = 0;
  console.log(map);
  while (end < s.length) {
    if (map[s[end++].charCodeAt(0)]-- > 0) counter--;
    while (counter === 0) {
      if (end - beg < d) d = end - (head = beg);
      if (map[s[beg++].charCodeAt(0)]++ === 0) counter++;
    }
  }
  return d === Number.MAX_SAFE_INTEGER ? '' : s.substr(head, d);
};

console.log(minWindow("ADOBECODEBANC"
,"ABC"));
