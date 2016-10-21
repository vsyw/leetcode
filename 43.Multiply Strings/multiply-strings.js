/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  const maxSize = num1.length + num2.length;
  let res = new Array(maxSize).fill(0);
  let carry = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    const iCur = parseInt(num1[i], 10);
    let pos = maxSize - num1.length + i;
    for (let j = num2.length - 1; j >= 0; j--) {
      const tmp = iCur * parseInt(num2[j], 10) + res[pos];
      // console.log('sum', tmp, iCur, carry, res[pos]);
      if (tmp < 10) {
        res[pos] = tmp;
      } else {
        carry = Math.floor(tmp / 10);
        res[pos - 1] += carry;
        res[pos] = tmp % 10;
      }
      pos--;
    }
  }

  carry = 0;
  for (let i = res.length - 1; i >= 0; i--)  {
    const cur = res[i] + carry;
    if (cur < 10) {
      res[i] = cur.toString();
      carry = 0;
    } else {
      carry = Math.floor(cur / 10);
      res[i] = (cur % 10).toString();
    }
  }
  res = res.join('');
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== '0') {
      return res.substr(i);
    }
  }
  return '0';
};

console.log(multiply('423', '432'));

