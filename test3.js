// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, M, X, Y) {
  let ppl = 0;
  let weights = 0;
  let floors = new Set();
  let count = 0;
  let i = 0;
  
  while (i < A.length) {
    if (ppl + 1 <= X && weights + A[i] <= Y) {
      ppl += 1;
      weights += A[i];
      floors.add(B[i]);
      console.log('push', i);
      i++;
    } else {
      count = count + floors.size + 1;
      ppl = 0;
      weights = 0;
      floors.clear();
      console.log('lift', i);
    }
  }
  if (floors.size > 0) {
    return count + floors.size + 1;
  }
  return count;
}

console.log(solution([60, 80, 40], [2, 3, 5], 5, 2, 200));
