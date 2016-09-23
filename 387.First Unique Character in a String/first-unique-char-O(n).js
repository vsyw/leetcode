const firstUniqChar = function (s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    if (freq.hasOwnProperty(s[i])) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('fuckfuk'));