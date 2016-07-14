/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function backtrack(ans, comb, candidates, target, start) {
  if (target < 0) return;
  if (target === 0) {
    ans.push(comb.slice());
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) continue;
    comb.push(candidates[i]);
    backtrack(ans, comb, candidates, target - candidates[i], i + 1);
    comb.pop();
  }
}

var combinationSum2 = function(candidates, target) {
  let ans = [];
  let comb = [];
  candidates.sort((a, b) => {
    return a <= b ? -1 : 1;
  });
  backtrack(ans, comb, candidates, target, 0);
  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
