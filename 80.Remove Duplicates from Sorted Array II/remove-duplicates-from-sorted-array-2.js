/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0;
  for (const item of nums) {
    if (i < 2 || item > nums[i - 2]) {
      nums[i++] = item;
    }
  }
  return i;
};

console.log(removeDuplicates([]));
