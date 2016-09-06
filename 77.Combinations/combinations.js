/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function backtrack(n, k, tmp, res, start) {
  if (tmp.lenth > k) return;
  // console.log(tmp.length);
  if (tmp.length === k) {
    res.push(tmp);
    return;
  }
  for (let i = start; i <= n; i++) {
    tmp.push(i);
    backtrack(n, k, tmp.slice(), res, i + 1);
    tmp.pop();
  }
}

const combine = function (n, k) {
  const res = [];
  const tmp = [];
  backtrack(n, k, tmp, res, 1);
  return res;
};

console.log(combine(4, 3));