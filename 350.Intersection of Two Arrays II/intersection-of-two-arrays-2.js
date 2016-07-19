/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let ans = [];
  let ht = {};
  for (let i = 0; i < nums1.length; i++) {
    if (ht[nums1[i]] >= 1) ht[nums1[i]]++;
    else {
      ht[nums1[i]] = 1;
    }
  }
  console.log(ht);
  for (let j = 0; j < nums2.length; j++) {
    if (ht[nums2[j]] >= 1) {
      ans.push(nums2[j]);
      ht[nums2[j]]--;
    }
  }

  return ans;
};

console.log(intersect([1,2,2,1], [2,2]));