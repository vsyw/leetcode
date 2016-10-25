/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const table = new Array(10).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    if (table[parseInt(nums[i], 10)] !== -1 &&
      i - table[parseInt(nums[i], 10)] <= k) {
      return true;
    } else {
      table[parseInt(nums[i], 10)] = i;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 4));
