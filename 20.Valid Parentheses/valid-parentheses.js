/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  
  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];
    if (c === ')') {
      stack.push('(');
    } else if (c === ']') {
      stack.push('[');
    } else if (c === '}') {
      stack.push('{');
    } else {
      if (c !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid('[[]]'));
