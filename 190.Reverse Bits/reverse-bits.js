/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * http://stackoverflow.com/questions/6798111/bitwise-operations-on-32-bit-unsigned-ints
 */
const reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res += n & 1;
    n = (n >> 1) >>> 0;
    if (i < 31) res = (res << 1) >>> 0;
    // console.log(res);
  }
  return res;
};

console.log(reverseBits(1));
