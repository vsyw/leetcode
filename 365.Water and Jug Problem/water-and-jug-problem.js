/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
function GCD(a, b) {
  return (b === 0) ? a : GCD(b, a % b);
}

var canMeasureWater = function(x, y, z) {
  return x + y === z || (x + y > z) && z % GCD(x, y) === 0;
};

console.log(GCD(12, 0));