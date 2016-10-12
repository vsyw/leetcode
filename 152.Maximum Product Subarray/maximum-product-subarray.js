/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  if (nums.length <= 0) return 0;
  let res = nums[0];
  let curMax = res;
  let curMin = res;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [curMax, curMin] = [curMin, curMax];
    }
    curMax = Math.max(nums[i], curMax * nums[i]);
    curMin = Math.min(nums[i], curMin * nums[i]);
    res = Math.max(res, curMax);
  }
  return res;
};

console.log(maxProduct([2, 3, -2, 4]));

