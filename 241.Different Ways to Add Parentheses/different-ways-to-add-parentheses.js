/**
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = function (input) {
  const res = [];
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '*' || c === '+' || c === '-') {
      const left = diffWaysToCompute(input.slice(0, i));
      const right = diffWaysToCompute(input.slice(i + 1));
      for (const l of left) {
        for (const r of right) {
          if (c === '*') {
            res.push(l * r);
          } else if (c === '+') {
            res.push(l + r);
          } else {
            res.push(l - r);
          }
        }
      }
    }
  }
  if (!res.length) {
    res.push(parseInt(input, 10));
  }
  return res;
};
