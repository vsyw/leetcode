/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max_sum = Number.MIN_SAFE_INTEGER, sum = 0;
  for(var i = 0; i < nums.length; i++) {
       if (sum > 0) {
           sum = sum + nums[i];
       } else {
           sum = nums[i];
       }
       if (sum > max_sum) {
           max_sum = sum;
       }
  }
  return max_sum;
};