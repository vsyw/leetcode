/**
 * @param {number} num
 * @return {string[]}
 */
const dec2bin = function (dec) {
  let str = (dec >>> 0).toString(2);
  str = [...str].reduce((a, b) => {
    return parseInt(a, 10) + parseInt(b, 10);
  });
  return parseInt(str, 10);
};

const readBinaryWatch = function (num) {
  const res = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      // console.log(i, j);
      // console.log('add', dec2bin(i) + dec2bin(j), num);
      if (dec2bin(i) + dec2bin(j) === num) {
        const min = j < 10 ? `0${j}` : j;
        res.push(`${i}:${min}`);
      }
    }
  }
  return res;
};

console.log(readBinaryWatch(1));
