/**
 * @param {string} s
 * @return {string}
 * references https://www.hrwhisper.me/leetcode-remove-duplicate-letters/
 */
const removeDuplicateLetters = function (s) {
  if (s.length <= 0) return s;

  const cnt = new Array(26).fill(0);
  const used = new Array(26).fill(false);
  const res = [];

  for (let i = 0; i < s.length; i++) {
    const pos = s[i].charCodeAt(0) - 97;
    cnt[pos] += 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    const pos = s[i].charCodeAt(0) - 97;
    cnt[pos] -= 1;

    if (used[pos]) continue;

    while (res.length && res[res.length - 1] > s[i] &&
        cnt[res[res.length - 1].charCodeAt(0) - 97]) {
      used[res.pop().charCodeAt(0) - 97] = false;
    }
    res.push(s[i]);
    used[pos] = true;
  }
  return res.join('');
};

console.log(removeDuplicateLetters('dcbacdcd'));
