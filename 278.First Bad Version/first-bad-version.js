/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid) === false) {
        left = mid + 1;
      } else if (isBadVersion(mid) === true
          && (isBadVersion(mid - 1) === false) || mid - 1 < 0) {
        return mid;
      } else {
        right = mid - 1;
      }
    }
  };
};
