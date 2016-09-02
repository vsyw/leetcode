/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }
    if (count <= mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
    return left;
  }
};

// console.log(binarySearch([1,3,2], 2));
console.log(findDuplicate([1, 3, 2, 2]));
