/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = new Set();
  vowels.add('a');
  vowels.add('e');
  vowels.add('i');
  vowels.add('o');
  vowels.add('u');
  vowels.add('A');
  vowels.add('E');
  vowels.add('I');
  vowels.add('O');
  vowels.add('U');
  s = s.split('');
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (vowels.has(s[i]) !== true) {
      i++;
      continue;
    }
    if (vowels.has(s[j]) !== true) {
      j--;
      continue;
    }
    if (vowels.has(s[i]) && vowels.has(s[j])) {
      let tmp = s[i];
      s[i] = s[j];
      s[j] = tmp;
      i++;
      j--;
    }
  }
  s = s.join('');
  return s;
};

console.log(reverseVowels('leetcode'));