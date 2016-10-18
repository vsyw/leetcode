/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let candidate;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};
