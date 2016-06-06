/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * binary search approach
 */
var searchInsert = function(nums, target) {
  var left = 0,
    right = nums.length - 1,
    mid = 0;
  while (left <= right) {
    mid = (right + left) / 2;
    mid = Math.ceil(mid);
    if (nums[mid] === target)
      return mid;
    else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (target > nums[right] && target < nums[left])
    return Math.ceil((left + right) / 2);
  if (target > nums[nums.length - 1])
    return nums.length;
  return mid;
};
