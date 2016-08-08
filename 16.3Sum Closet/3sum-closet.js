/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const ans = Number.MAX_VALUE;
  const minV = Number.MAX_VALUE;
  nums.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  for (let i = 0; i < nums.length; i++) {
    var beg = i+1, end = nums.length-1;
    // console.log('beg ', beg, '', 'end ', end);
    while(beg < end) {
      var sum = nums[i] + nums[beg] + nums[end];
      // console.log('sum = ', i, '+', beg, '+', end);
      if (sum === target) {
        return target;
      } else if (sum < target) {
        beg++;
      } else {
        end--;
      }
      if (minV > Math.abs(sum - target)) {
        minV = Math.abs(sum - target);
        ans = sum;
      }
    }
  }
  return ans;
};