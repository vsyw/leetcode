/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
  if (num === 0) return '0';
  let res = '';
  const map = ['0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
  while (num && res.length < 8) {
    res = map[num & 15] + res;
    num = num >> 4;
  }
  
  return res.trim();
};

console.log(toHex(0));
