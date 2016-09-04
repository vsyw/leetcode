/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  if (nums.length > 1) {
    let slow = nums[0];
    let fast = nums[nums[0]];

    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }
    slow = 0;
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
    return slow;
  }
  return -1;
};

console.log(findDuplicate([1,3,4,2,2]));
