/**
 * @param {number} n
 * @return {number}
 * 設有 n 個燈泡，第 i 個燈泡 on or off 取決於小於等於 n 的數字有幾個可以整除 i
 * 基數個的話是 on，偶數個是 off
 * 然後除了完全平方數，其他的數字因數都是成對出現（偶數）
 * 所以這題變成要算，小於等於 n 的數字中，有多少完全平方數 （bulb on)
 */
const bulbSwitch = function (n) {
  return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch(36));
