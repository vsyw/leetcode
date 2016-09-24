/**
 * @param {number[]} nums
 * @return {number}
 */
 //it is similar to dp, you could consider a as previous max num at even, b as previous max num at odd.
var rob = function(nums) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(b + nums[i], a);
    }
  }
  return Math.max(a, b);
};
