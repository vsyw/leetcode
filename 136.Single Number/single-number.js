/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((a, b) => {
    return a ^= b }, 0);
};
