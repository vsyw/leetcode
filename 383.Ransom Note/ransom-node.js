/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map.hasOwnProperty(magazine[i])) {
      map[magazine[i]]++;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (map.hasOwnProperty(ransomNote[j])) {
      map[ransomNote[j]]--;
      console.log(map);
      if (map[ransomNote[j]] < 0) return false;
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct('aa', 'aab'));
