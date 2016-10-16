/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let p = 0;
  let q = s.length - 1;

  while (p < q) {
    if (s[p].match(/[a-zA-Z0-9]/) === null) {
      p++;
      continue;
    } else if (s[q].match(/[a-zA-Z0-9]/) === null) {
      q--;
      continue;
    }
    if (s[p].toUpperCase() !== s[q].toUpperCase()) {
      return false;
    }
    p++;
    q--;
  }

  return true;
};

console.log(isPalindrome('race a car'));
