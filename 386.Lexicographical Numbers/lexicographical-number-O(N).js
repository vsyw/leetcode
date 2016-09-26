/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
  const res = [];
  let cur = 1;
  for (let i = 0; i < n; i++) {
    res.push(cur);
    if (cur * 10 <= n) {
      cur = cur * 10;
    } else if (cur % 10 !== 9  && cur + 1 <= n) {
      cur += 1;
    } else {
      while (Math.floor(cur / 10) % 10 === 9) cur = Math.floor(cur / 10);
      cur = Math.floor(cur / 10) + 1;
    }
  }
  return res;
};