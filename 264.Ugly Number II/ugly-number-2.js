'use strict';
/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const res = [1];
  let index2 = 0, index3 = 0, index5 = 0;
  // let factor2 = 2, factor3 = 3, factor5 = 5;
  while (res.length < n) {
    let cur = Math.min(res[index2] * 2, res[index3] * 3, res[index5] * 5);
    res.push(cur);
    if (cur === res[index2] * 2) index2++;
    if (cur === res[index3] * 3) index3++;
    if (cur === res[index5] * 5) index5++;
  }
  return res.pop();
};

console.log(nthUglyNumber(100));