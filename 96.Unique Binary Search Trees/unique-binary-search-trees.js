/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const numBST = new Array(n + 1).fill(0);
  numBST[0] = numBST[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      numBST[i] += numBST[j] * numBST[i - j - 1];
    }
  }
  return numBST[n];
};