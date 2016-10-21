/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  const m = num1.length;
  const n = num2.length;
  let pos = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = parseInt(num1[i], 10) * parseInt(num2[j], 10);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + pos[p2];

      pos[p1] += Math.floor(sum / 10);
      pos[p2] = sum % 10;
    }
  }
  
  pos = pos.join('');
  for (let i = 0; i < pos.length; i++) {
    if (pos[i] !== '0') {
      return pos.substr(i);
    }
  }
  return '0';
};
