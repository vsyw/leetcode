/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
  const res = [];
  for (let i = 1; i <= n; i++) res.push(i.toString());
  res.sort();
  for (let i = 0; i < res.length; i++) {
    res[i] = parseInt(res[i], 10);
  }
  return res;
};

console.log(lexicalOrder(14959));
