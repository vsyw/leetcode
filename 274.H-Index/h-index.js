/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  citations.sort((a, b) => {
    return a - b;
  });
  let h = 0;
  console.log(citations);
  for (let i = citations.length - 1; i >= 0; i--) {
    if (citations.length - i <= citations[i]) {
      h = citations.length - i;
      return h;
    }
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
