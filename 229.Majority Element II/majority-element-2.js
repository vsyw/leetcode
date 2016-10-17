/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOf = function (num, arr) {
  let count = 0;
  arr.forEach((item) => {
    if (item === num) count++;
  });
  return count;
};

const majorityElement = function (nums) {
  let candidate1 = 0;
  let candidate2 = 1;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) {
      count1++;
    } else if (candidate2 === nums[i]) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = nums[i];
      count1++;
    } else if (count2 === 0) {
      candidate2 = nums[i];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  return [candidate1, candidate2].filter((c) => {
    return numberOf(c, nums) > Math.floor(nums.length / 3);
  });
};

console.log(majorityElement([0, 0, 0]));
