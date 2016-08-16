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
    [nums[begin], nums[i]] = [nums[i], nums[begin]];
    permuteRecursive(begin + 1, nums.slice(), result);
    [nums[begin], nums[i]] = [nums[i], nums[begin]];
  }
}

const permute = function (nums) {
  const result = [];
  permuteRecursive(0, nums, result);
  return result;
};

console.log(permute([1, 2, 3, 4, 5]));
