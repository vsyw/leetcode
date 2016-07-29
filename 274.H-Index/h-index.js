/**
 * @param {number[]} citations
 * @return {number}
 * https://zh.wikipedia.org/wiki/H%E6%8C%87%E6%95%B0
 */
const hIndex = function (citations) {
  citations.sort((a, b) => {
    return a - b;
  });
  let h = 0;
  console.log(citations);
  for (let i = 0; i <= citations.length; i++) {
    const curH = Math.min(citations[i], citations.length - i);
    if (curH > h) h = curH;
  }
  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));


// const candidates = {};
//   const arraySize = citations.length;
//   citations.sort((a, b) => {
//     return a - b;
//   });
//   citations.forEach((item, index) => {
//     if (candidates.hasOwnProperty(item)) return;
//     else {
//       candidates[item] = arraySize - index;
//     }
//   });
//   let ans = 0;
//   // console.log('candidates', candidates);
//   for (let key in candidates) {
//     // console.log('key ', key);
//     if (candidates[key] >= ans && key >= candidates[key]) {
//       ans = candidates[key];
//     }
//   }
//   return ans;
