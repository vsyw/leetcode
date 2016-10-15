/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  const stack = [];
  let sign = 1;
  let number = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // check if c is an integer
    if (Number.isInteger(parseInt(c, 10))) {
      number = number * 10 + parseInt(c, 10);
    } else if (c === '+') {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (c === '-') {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (c === '(') {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (c === ')') {
      result += sign * number;
      number = 0;
      result = stack.pop() * result;
      result += stack.pop();
    }
  }
  if (number) result += sign * number;
  return result;
};

console.log(calculate('(2+1) - (17 +3)   '));

