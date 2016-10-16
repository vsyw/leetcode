/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const res = s.trim().split(' ');
  return res[res.length - 1].length;
};

console.log(lengthOfLastWord(' df fuck a d afjk af you         '));