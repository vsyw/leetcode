/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const hTable = {};
  for (let i = 0; i < s.length; i++) {
    if (hTable[s[i]]) {
      hTable[s[i]]++;
    } else {
      hTable[s[i]] = 1;
    }
  }

  const keys = Object.keys(hTable).sort((a, b) => {
    return hTable[b] - hTable[a];
  });
  
  const res = keys.map((key) => {
    return key.repeat(hTable[key]);
  });

  return res.join('');
};

console.log(frequencySort('Bacbbb'));
