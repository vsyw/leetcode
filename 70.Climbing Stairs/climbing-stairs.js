/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  
  const ans = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2];
  }
  return ans.pop();
};

console.log(climbStairs(4));
