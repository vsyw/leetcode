// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let idx = 0;
  let count = 0;
  while (idx !== -1) {
    idx = A[idx];
    count++;
  }
  return count;
}

console.log(solution([1, 4, -1, 3, 2]));
