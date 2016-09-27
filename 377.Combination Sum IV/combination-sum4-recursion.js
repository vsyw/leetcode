/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  if (target === 0) return 1;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] >= 0) {
      res += combinationSum4(nums, target - nums[i]);
    }
  }
  return res;
};
