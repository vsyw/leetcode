/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  let carry = 0;
  let res = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 && j >= 0) {
    const tmp = parseInt(num1[i--], 10) + parseInt(num2[j--], 10) + carry;
    res = (tmp % 10).toString() + res;
    carry = Math.floor(tmp / 10);
  }
  console.log(i, j);
  while (i >= 0) {
    const tmp = parseInt(num1[i--], 10) + carry;
    res = (tmp % 10).toString() + res;
    carry = Math.floor(tmp / 10);
  }
  while (j >= 0) {
    const tmp = parseInt(num2[j--], 10) + carry;
    res = (tmp % 10).toString() + res;
    carry = Math.floor(tmp / 10);
  }
  return carry === 0 ? res : carry.toString() + res;
};

console.log(addStrings('12', '12343'));
