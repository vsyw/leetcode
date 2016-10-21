/**
 * @param {number[]} A
 * @return {number}
 * references: http://www.cnblogs.com/grandyang/p/5869791.html
 */
const maxRotateFunction = function (A) {
  let sum = 0;
  let pre = 0;
  const n = A.length;
  for (let i = 0; i < n; i++) {
    sum += A[i];
    pre += A[i] * i;
  }

  let res = pre;
  for (let i = 1; i < n; i++) {
    pre = pre + sum - n * A[n - i];
    res = Math.max(res, pre);
  }
  return res;
};

console.log(maxRotateFunction([4, 3, 2, 6]));
