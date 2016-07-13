/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
'use strict';

function backtrack(ans, comb, start, k, n) {
  if (comb.length > k) return;
  if (comb.length === k && n === 0) {
    ans.push(comb.slice());
    return;
  }
  for (let i = start; i <= 9; i++) {
    comb.push(i);
    backtrack(ans, comb, i + 1, k, n - i);
    comb.pop();
  }
}

var combinationSum3 = function(k, n) {
  var ans = [];
  var comb = [];
  backtrack(ans, comb, 1, k, n);
  return ans;
};

console.log(combinationSum3(3,7));