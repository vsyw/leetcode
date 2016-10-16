/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0;
  for (const item of nums) {
    if (item !== val) nums[i++] = item;
  }
  return i;
};
