/**
 * @param {number[]} nums
 * @return {number}
 */
//http://www.cnblogs.com/grandyang/p/4518674.html

function goRob(nums) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(b + nums[i], a);
    }
  }
  return Math.max(a, b);
}

const rob = function (nums) {
  const v1 = nums.slice();
  const v2 = nums.slice();
  v1.shift();
  v2.pop();
  console.log(v1, v2);
  return Math.max(goRob(v1), goRob(v2));
};

console.log(rob([1, 2,10, 3, 5, 29]
));
