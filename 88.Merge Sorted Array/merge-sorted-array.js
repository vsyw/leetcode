/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let tar = m + n - 1;
  while (j >= 0) {
    if (i < 0 || nums2[j] >= nums1[i]) {
      nums1[tar--] = nums2[j--];
    } else {
      nums1[tar--] = nums1[i--];
    }
  }
  console.log(nums1);
};
merge([2, 0, 5], 1, [1], 1);

