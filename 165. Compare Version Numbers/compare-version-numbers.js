/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const version1_int = parseInt(version1.split('.')[0]);
  const version1_dec = parseInt(version1.split('.')[1]);

  const version2_int = parseInt(version2.split('.')[0]);
  const version2_dec = parseInt(version2.split('.')[1]);

  if (version1_int > version2_int) return 1;
  else if (version1_int < version2_int) return -1;
  else if (version1_int === version2_int) {
    if (version1_dec > version2_dec || !version2_dec) return 1;
    if (version1_dec < version2_dec || !version1_dec) return -1;
    return 0;
  } 
};

console.log(compareVersion('1.1', '1'));