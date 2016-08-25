/**
 * @param {number[][]} envelopes
 * @return {number}
 *
 * http://www.cnblogs.com/grandyang/p/5568818.html
 */
const maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  // envelopes.sort();
  let res = 0;
  const dp = new Array(envelopes.length).fill(1);
  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

console.log(maxEnvelopes([[30,50],[12,2],[3,4],[12,15]]));

