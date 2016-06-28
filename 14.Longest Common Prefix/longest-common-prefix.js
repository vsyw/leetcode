/**
 * @param {string[]} strs
 * @return {string}
 * 取 arr[0] 的 value
 * 拿出arr[0]的每一個 char 去比較arr的每一個value的相對char是否相同
 * 若不相同 return, 若value 的length 小於 arr[0] retrun;
 */
var longestCommonPrefix = function(strs) {
  
  if (!strs.length) return "";

  let prefix = "";
  
  for (let i = 0; i < strs[0].length; prefix += strs[0][i], i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i] || strs[j].length < i) {
        return prefix;
      }
    }
  }
  return prefix;
};

// console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["abcd", "abc", "abckjlk"]));
