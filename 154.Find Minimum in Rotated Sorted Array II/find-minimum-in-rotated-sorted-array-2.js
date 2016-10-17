/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[right] > nums[mid]) { // strictly descending order
      right = mid;
    } else {
      // nums[mid] = nums[right] => we don't know minimum
      // locates at mid's left or right
      right--;
    }
  }
  return nums[left];
};

console.log(findMin([10, 1, 10, 10, 10]));

