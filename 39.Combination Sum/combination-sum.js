/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function backtrack(candidates, target, index, tmpRes, res) {
  if (target === 0) {
    res.push(tmpRes);
    return;
  }
  if (target < 0) return;

  for (let i = index; i < candidates.length; ++i) {
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    if (candidates[i] <= target) {
      tmpRes.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i, tmpRes.slice(), res);
      tmpRes.pop();
    }
  }
}

const combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const tmpRes = [];
  const res = [];
  backtrack(candidates, target, 0, tmpRes, res);
  return res;
};

console.log(combinationSum([2, 3, 7], 7));
