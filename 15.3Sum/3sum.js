/**
 * @param {number[]} nums
 * @return {number[][]}
 * two pointer
 */


const threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  // console.log(nums);
  const ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let beg = i + 1;
    let end = nums.length - 1;
    let tmp = [nums[i]];
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (beg < end) {
      // console.log('llop');
      let sum = nums[i] + nums[beg] + nums[end];
      if (sum < 0) {
        beg++;
      } else if (sum > 0) {
        end--;
      } else {
        console.log(i, beg, end);
        ans.push([nums[i], nums[beg], nums[end]]);
        while (beg < end && nums[beg] === nums[beg + 1]) beg++;
        while (beg < end && nums[end] === nums[end - 1]) end--;
        beg++;
        end--;
      }
    }
  }
  return ans;
};

console.log(threeSum([-1, -1, -1,2, 2, -1, -4]));

