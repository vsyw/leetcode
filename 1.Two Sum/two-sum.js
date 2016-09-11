/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(target - nums[i], i + 1) !== -1) {
      result.push(i);
      result.push(nums.indexOf(target - nums[i], i + 1));
      return result;
    }
  }
  return result;
};
console.log(twoSum([3, 2, 4], 6));