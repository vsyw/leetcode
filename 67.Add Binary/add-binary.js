/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let carry = 0;
  let i = a.length - 1;
  let j = b.length -1;
  let res = '';
  
  while (i >= 0 || j >= 0 || carry === 1) {
    carry += i >= 0 ? a[i--] - '0' : 0;
    carry += j >= 0 ? b[j--] - '0' : 0;
    res = (carry % 2) + res;
    carry = Math.floor(carry / 2);
  }
  
  return res;

};

console.log(addBinary('11', '11'));

