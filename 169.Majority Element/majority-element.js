/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  for (const key in map) {
    if (map[key] > Math.floor(nums.length / 2)) {
      return parseInt(key, 10);
    }
  }
};
