/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const sTable = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) sTable[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  for (let i = 0; i < t.length; i++) sTable[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  for (let i = 0; i < sTable.length; i++) if (sTable[i] !== 0) return false;
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
