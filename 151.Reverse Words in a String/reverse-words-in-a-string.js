/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function (str) {
  str = str.split(' ');
  str = str.filter((item) => {
    return item.length > 0;
  });
  if (str.length === 0) return '';
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];
    i++;
    j--;
  }
  return str.join(' ');
};

console.log(reverseWords(' a    b   '), 'h');