/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const table1 = {};
  const table2 = {};
  for (let i = 0; i < s.length; i++) {
    if (table1.hasOwnProperty(s[i]) && table1[s[i]] !== t[i] ||
      table2.hasOwnProperty(t[i]) && table2[t[i]] !== s[i]) {
      return false;
    }
    table1[s[i]] = t[i];
    table2[t[i]] = s[i];
  }
  return true;
};

console.log(isIsomorphic('ab', 'aa'));
