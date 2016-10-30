/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const table = {};
  for (let i = 0; i < s.length; i++) {
    if (table.hasOwnProperty(s[i])) table[s[i]]++;
    else {
      table[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!table.hasOwnProperty(t[i])) return t[i];
    if (--table[t[i]] < 0) return t[i];
  }
};

console.log(findTheDifference('abcd', 'abcde'));
