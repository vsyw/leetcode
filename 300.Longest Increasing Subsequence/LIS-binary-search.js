/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  
  let tails = new Array(nums.length);
  tails[0] = nums[0];
  console.log(tails);
  for (let i = 0; i < nums.length; i++) {

  }
}

console.log(lengthOfLIS([2, 5, 3, 7, 101, 18]));

