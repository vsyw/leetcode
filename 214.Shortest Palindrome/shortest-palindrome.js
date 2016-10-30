/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = function (str) {
  const left = str.substr(0, Math.floor(str.length / 2));
  const right = [...str].reverse().join('').substr(0, Math.floor(str.length / 2));
  return left === right;
};

const shortestPalindrome = function (s) {
  const stack = [];
  while (s.length > 0) {
    console.log(stack);
    if (isPalindrome(s)) return [...stack, ...s, ...stack.slice().reverse()].join('');
    stack.push(s[s.length - 1]);
    s = s.substr(0, s.length - 1);
  }
  return s;
};

console.log(shortestPalindrome('aacecaaa'));
