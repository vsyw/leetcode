/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// O(n^2) solution
var intersection = function(nums1, nums2) {
  let output = new Set();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        output.add(nums2[j]);
      }
    }
  }
  output = [...output];
  return output;
};

console.log(intersection([1,2,2,1], [2,2, 1]));
