/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] < nums[end]) return nums[start];
    const mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};
