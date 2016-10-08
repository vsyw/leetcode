/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * reference: https://leetcodenotes.wordpress.com/2013/11/21/leetcode-gas-station-%E8%BD%AC%E5%9C%88%E7%9A%84%E5%8A%A0%E6%B2%B9%E7%AB%99%E7%9C%8B%E8%83%BD%E4%B8%8D%E8%83%BD%E8%B5%B0%E4%B8%80%E5%9C%88/
 * 反正法：假設存在，除非總和小於零
 */
const canCompleteCircuit = function (gas, cost) {
  let left = 0;
  let curSum = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    left += gas[i] - cost[i];
    curSum += gas[i] - cost[i];
    if (curSum < 0) {
      start = i + 1;
      curSum = 0;
    }
  }
  if (left < 0) return -1;
  return start;
};

console.log(canCompleteCircuit());
