/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 *
 * http://bangbingsyb.blogspot.tw/2014/11/leetcode-permutation-sequence.html
 */
const getPermutation = function (n, k) {
  let res = '';
  const factorial = new Array(n).fill(1);
  const nums = [];
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }
  for (let i = 0; i <= n; i++) {
    nums[i] = i + 1;
  }
  k--;
  for (let i = n; i > 0; i--) {
    let j = Math.floor(k / factorial[i - 1]);
    k = k % factorial[i - 1];
    res += nums[j];
    nums.splice(j, 1);
  }
  return res;
};

console.log(getPermutation(4, 9));

