/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  if (k <= 0) return [];
  if (nums.length <= k) return [Math.max(...nums)];
  const res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    const tmp = nums.slice(i, i + k);
    res.push(Math.max(...tmp));
  }
  return res;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
