/**
 * @param {number[]} nums
 * @return {string[]}
 */
'use strict';

var summaryRanges = function(nums) {
  var ans = [];
  for (var i = 0; i < nums.length; ) {
    var beg = i, end = i;
    var str = nums[beg].toString();
    while (1) {
      if (end+1 < nums.length && nums[end+1] === nums[end]+1) {
        end += 1;
      } else if (beg !== end){
        str = str + "->" + nums[end];
        break;
      } else {
        break;
      }
    }
    ans.push(str);
    i = end+1;

  } 
  return ans;
};

console.log(summaryRanges([0,1,2,3,4,5,7]));