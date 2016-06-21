/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Array.prototype.bubble_sort = function () {
//   for (let i = 0; i < this.length - 1; i++) {
//     for (let j = 0; j < this.length - 1 - i; j++) {
//       if (this[j] > this[j + 1]) {
//         [this[j], this[j + 1]] = [this[j + 1], this[j]];
//       }
//     }
//   }
//   return this;
// };



var sortColors = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
};

sortColors([2, 1, 4, 2, 5, 7, 3]);