/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (nums.length <= 0) return 0;
  const length = nums.map((item) => {
    return [item];
  });
  console.log(length);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && length[i].length < length[j].length + 1) {
        console.log('shit');
        length[i] = [...length[j], nums[i]];
      }
    }
  }
  console.log(length);
  return Math.max(...length);
};

console.log(lengthOfLIS([2, 5, 3, 7, 101, 18]));
