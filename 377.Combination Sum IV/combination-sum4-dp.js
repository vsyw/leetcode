/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  const comb = new Array(target + 1).fill(0);
  comb[0] = 1;
  for (let i = 1; i <= target; i++) {
    nums.forEach((item) => {
      if (i - item >= 0) {
        comb[i] += comb[i - item];
      }
    });
  }
  return comb.pop();
};

console.log(combinationSum4([1, 2, 3], 4));
