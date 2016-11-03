/**
 * @param {number} num
 * @return {number[]}
 * https://www.hrwhisper.me/leetcode-counting-bits/
 */
const countBits = function (num) {
  const res = [0];
  for (let i = 1; i <= num; i++) {
    res.push(res[i >> 1] + (i & 1));
  }
  return res;
};

console.log(countBits(5));
