/**
 * @param {string} digits
 * @return {string[]}
 * http://www.cnblogs.com/TenosDoIt/p/3771254.htmls
 */

function backtrack(digits, index, table, tmp, result) {
  if (index === digits.length) {
    result.push(tmp);
    return;
  }
  for (let i = 0; i < table[digits[index] - '0'].length; i++) {
    tmp += table[digits[index] - '0'][i];
    backtrack(digits, index + 1, table, tmp.slice(), result);
    tmp = tmp.substring(0, tmp.length - 1);
  }
}

const letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const table = ['', '*', 'abc', 'def', 'ghi', 'jkl',
    'mno', 'pqrs', 'tuv', 'wxyz'];
  
  const result = [];
  backtrack(digits, 0, table, '', result);
  return result;
};

console.log(letterCombinations('23'));
