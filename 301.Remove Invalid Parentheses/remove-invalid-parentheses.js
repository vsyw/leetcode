/**
 * @param {string} s
 * @return {string[]}
 */
const isValid = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') count++;
    if (c === ')' && count-- === 0) return false;
  }
  return count === 0;
};

const removeInvalidParentheses = function (s) {
  if (s.length === 0) return [''];

  const visited = new Set();
  const queue = [s];
  const res = [];
  let found = false;

  while (queue.length) {
    s = queue.shift();
    if (isValid(s)) {
      res.push(s);
      found = true;
    }
    if (found) continue;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '(' && s[i] !== ')') continue;
      const tmp = s.substr(0, i) + s.substr(i + 1);
      if (!visited.has(tmp)) {
        queue.push(tmp);
        visited.add(tmp);
      }
    }
  }
  return res;
};

console.log(removeInvalidParentheses('x('));
