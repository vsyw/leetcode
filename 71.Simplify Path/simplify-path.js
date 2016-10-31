/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const p = path.split('/');
  const stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '.' || p[i] === '') continue;
    else if (p[i] === '..') stack.pop();
    else {
      stack.push(`/${p[i]}`);
    }
  }
  if (stack.length === 0) return '/';
  return stack.join('');
};

console.log(simplifyPath('/home//foo/'));

