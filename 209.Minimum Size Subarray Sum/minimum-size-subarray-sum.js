/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
  if (s === 0 || nums.length === 0) return 0;
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  while (j < nums.length) {
    sum += nums[j];
    while (sum >= s) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

console.log(minSubArrayLen(4, [1, 4, 4]));
