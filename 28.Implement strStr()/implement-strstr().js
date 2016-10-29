/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle.length <= 0) return 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0] &&
      haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr('you want me to fuck you', ''));
