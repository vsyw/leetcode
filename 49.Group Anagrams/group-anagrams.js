/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function sortStirng(str) {
  str = str.split('');
  str.sort();
  return str.join('');
}

const groupAnagrams = function (strs) {
  const hTable = {};
  const result = [];
  
  strs.forEach((item, index) => {
    const s = sortStirng(item);
    if (hTable.hasOwnProperty(s)) {
      hTable[s].push(index);
    } else {
      hTable[s] = [index];
    }
  });

  for (const key in hTable) {
    const tmp = [];
    hTable[key].forEach((val) => {
      tmp.push(strs[val]);
    });
    result.push(tmp);
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
