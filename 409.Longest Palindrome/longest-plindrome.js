/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  if (s.length <= 0) return 0;
  const hTable = {};
  for (let i = 0; i < s.length; i++) {
    if (hTable.hasOwnProperty(s[i])) hTable[s[i]]++;
    else hTable[s[i]] = 1;
  }
  let res = 0;
  let odd = false;
  for (const k in hTable) {
    if (hTable[k] % 2 === 0) res += hTable[k];
    else {
      // A odd number minus one is a even number
      odd = true;
      res += hTable[k] - 1;
    }
  }
  // res + 1 to add back the odd number so that
  // there will be only one odd number in the sequence
  return odd ? res + 1 : res;
};

console.log(longestPalindrome("bb"));
