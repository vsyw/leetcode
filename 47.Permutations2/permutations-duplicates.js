/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteRecursive(begin, nums, result) {
  if (begin === nums.length) {
    result.push(nums);
    return;
  }
  for (let i = begin; i < nums.length; i++) {
    // swap
    if (i !== begin && nums[i] === nums[begin]) {
      continue;
    }
    [nums[begin], nums[i]] = [nums[i], nums[begin]];
    permuteRecursive(begin + 1, nums.slice(), result);
    // [nums[begin], nums[i]] = [nums[i], nums[begin]];
  }
}

const permuteUnique = function (nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  permuteRecursive(0, nums, result);
  return result;
};

console.log(permuteUnique([1, 1, 2, 2]));
