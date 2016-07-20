/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  // nums.sort((a, b) => {
  //   // console.log(a, b);
  //   if (a === 0) return 1;
  //   if (b === 0) return -1;
  //   return 0;
  // });
  // let l = nums.length;
  // for (let i = 0; i < l; i++) {
  //   if (nums[i] === 0) {
  //     nums.push(...nums.slice(i, i + 1));
  //     console.log('fuck');
  //     // nums.splice(i, 1);
  //   }
  // }
  // console.log(nums);
  // for (let i = 0; i < l; i++) {
  //   if (nums[i] === 0) {
  //     console.log('i = ', i);
  //     nums.splice(i, 1);
  //   }
  // }
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k++] = nums[i];
    }
  }
  for(; k < nums.length; k++) {
    nums[k] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));

