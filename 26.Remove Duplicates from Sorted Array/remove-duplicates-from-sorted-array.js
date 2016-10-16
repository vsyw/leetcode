/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0;
  while (i + 1 < nums.length) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
    } else {
      i = i + 1;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
