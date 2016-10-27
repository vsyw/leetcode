/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// deque 用來記錄 index，確保最左邊的element 是在 k 範圍內
// 每次加入 element 前先確認 deque 中是否有小於 cur value 的值，有的話 pop
// 確保 num[deque[0]] 永遠在 k 範圍內最大

const maxSlidingWindow = function (nums, k) {
  const deque = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (deque[0] < i - k + 1) deque.shift();
    if (i >= k - 1) res.push(nums[deque[0]]);
  }
  return res;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
