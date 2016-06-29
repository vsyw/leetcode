/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


// O(n^2) solution
// var intersection = function(nums1, nums2) {
//   let output = new Set();
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         output.add(nums2[j]);
//       }
//     }
//   }
//   output = [...output];
//   return output;
// };

// O(n) solution
var intersection = function(nums1, nums2) {
  let set1 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  console.log(set1);
  let output = new Set();
  for (let j = 0; j < nums2.length; j++) {
    if (set1.has(nums2[j])) {
      output.add(nums2[j]);
    }
  }
  return [...output];
}

console.log(intersection([1,2,2,1], [2,2, 1]));
