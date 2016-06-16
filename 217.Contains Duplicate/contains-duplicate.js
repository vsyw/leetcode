/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var distinct = new Object();
    for (var i = 0; i < nums.length; i++) {
      if (distinct[nums[i]] === true) {
        return true;
      } else { 
        distinct[nums[i]] = true;
      }
    }
    return false;
};

/**
* forEach version less performance than above one
*/
var containsDuplicate = function(nums) {
    var distinct = {};
    var ans = false;
    nums.forEach((n) => {
      if (distinct[n] === true) {
        ans = true;
      } else {
        distinct[n] = true;
      }
    });
    return ans;
};

console.log(containsDuplicate([1,2,3,4,3]));