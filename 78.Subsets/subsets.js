/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// relative solutions:
// https://discuss.leetcode.com/topic/46159/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partitioning/2

function backtrack(ans, set, nums, start) {
  // if (start === nums.length) {
  //   ans.push(set.slice());
  //   return;
  // }
  ans.push(set.slice());
  for (let i = start; i < nums.length; i++) {
    set.push(nums[i]);
    backtrack(ans, set.slice(), nums, i + 1);
    set.pop();
  }
}

var subsets = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  let set = [];
  backtrack(ans, set, nums, 0);
  return ans;
};

console.log(subsetsWithDup([1, 2]));