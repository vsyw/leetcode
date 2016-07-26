/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

const computeArea = function (A, B, C, D, E, F, G, H) {
  const areaA = (C - A) * (D - B);
  const areaB = (G - E) * (H - F);
  
  const left = Math.max(A, E);
  const right = Math.min(G, C);
  const top = Math.min(D, H);
  const bottom = Math.max(B, F);

  let overlapped = 0;

  if (right > left && top > bottom) {
    overlapped = (right - left) * (top - bottom);
  }

  return areaA + areaB - overlapped;
};
