/**
 * @param {number[]} nums
 * @return {number}
 */
'use strict';
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1) {
      if (nums[i] <= 0 || nums[i] > nums.length || nums[i] === nums[nums[i] - 1]) break;
      // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
      let tmp = nums[i];
      nums[i] = nums[tmp - 1];
      nums[tmp - 1] = tmp;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

// firstMissingPositive([1,2,0]);
console.log(firstMissingPositive([3, 4, -1, 1]));
