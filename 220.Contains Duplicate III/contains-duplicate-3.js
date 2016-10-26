/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (t < 0 || k < 1) return false;
  const div = t + 1;
  const bucket = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const idx = Math.floor(num / div);
    if (bucket.hasOwnProperty(idx) ||
      (bucket.hasOwnProperty(idx - 1) && Math.abs(bucket[idx - 1] - num) <= t) ||
      (bucket.hasOwnProperty(idx + 1) && Math.abs(bucket[idx + 1] - num) <= t)) {
      return true;
    }
    if (i >= k) delete bucket[Math.floor(nums[i - k] / div)];
    bucket[idx] = num;
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 3, 1], 1, 1));
