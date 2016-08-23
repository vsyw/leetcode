/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function (pattern, str) {
  const patternMap = {};
  const strMap = {};
  str = str.split(' ');
  if (pattern.length !== str.length) return false;
  
  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.hasOwnProperty(pattern[i])) patternMap[pattern[i]] = str[i];
    if (!strMap.hasOwnProperty(str[i])) strMap[str[i]] = pattern[i];
    if (patternMap[pattern[i]] !== str[i] || strMap[str[i]] !== pattern[i]) return false;
  }

  return true;
};

console.log(wordPattern('abba', 'dog dog dog dog'));
