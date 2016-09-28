/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const res = [-1, -1];
  if (nums.indexOf(target) !== -1) {
    res[0] = nums.indexOf(target);
    for (let i = res[0]; i < nums.length; i++) {
      if (nums[i] !== target) break;
      res[1] = i;
    }
  }
  return res;
};

console.log(searchRange([1, 2, 3, 8, 8, 10], 9));
