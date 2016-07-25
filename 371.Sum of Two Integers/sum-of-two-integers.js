/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * Good referrence from: http://blog.csdn.net/itismelzp/article/details/49621741
 */
// const getSum = function (a, b) {
//   let carry;
//   while (b) {
//     carry = (a & b) << 1;
//     a = a ^ b;
//     b = carry;
//   }
//   return a;
// };

const getSum = function (a, b) {
  if (b === 0) return a;
  let carry = (a & b) << 1;
  a = a ^ b;
  return getSum(a, carry);
// }

console.log(getSum(10, -3));
