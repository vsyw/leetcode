/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (nums.length <= 0) return 0;
  const length = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        length[i] = Math.max(length[i], length[j] + 1);
      }
    }
  }
  // console.log(length);
  return Math.max(...length);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
