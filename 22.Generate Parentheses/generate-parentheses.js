/**
 * @param {number} n
 * @return {string[]}
 */
function addParenthesis(arr, str, n, m) {
  if (n === 0 && m === 0) {
    arr.push(str);
    return;
  }
  if (m > 0) addParenthesis(arr, str + ')', n, m - 1);
  if (n > 0) addParenthesis(arr, str + '(', n-1, m + 1);
}

var generateParenthesis = function(n) {
  let ans = [];
  let str = '';
  addParenthesis(ans, str, n, 0);
  return ans;
};