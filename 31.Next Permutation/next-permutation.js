/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// referrence: http://bangbingsyb.blogspot.tw/2014/11/leetcode-next-permutation.html
// 由後向前找，找到第一個非遞增的數，記住該位置 i
// 從後向前找，找到第一個 nums[j] > nums[i]; swap(nums[i], nums[j])
// sorting nums[i ~ nums.length]
const nextPermutation = function (nums) {
  if (nums.length < 2) return;
  let i = nums.length - 2;
  
  while (i >= 0 && nums[i] >= nums[i + 1])  {
    i--;
  }
  // i = i - 1;
  console.log('fuck',i);
  if (i < 0) {
    nums.sort((a, b) => a - b);
    return nums;
  }
  
  let j = nums.length - 1;
  while (j > i && nums[j] <= nums[i]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  const backArray = nums.splice(i + 1).sort((a, b) => a - b);
  const output = [...nums, ...backArray];
  output.forEach((item, index) => {
    nums[index] = item;
  });
  console.log(nums);
};

// let arg = process.argv[2];
// console.log(arg);
console.log(nextPermutation([7, 3, 1, 2, 2, 5]));
