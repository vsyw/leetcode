/**
 * @param {number} rowIndex
 * @return {number[]}
 */

//The basic idea is to iteratively update the array
//from the end to the beginning.

const getRow = function (rowIndex) {
  const res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      res[j] = res[j] + res[j - 1];
    }
  }
  return res;
};

console.log(getRow(5));
