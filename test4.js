// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const test = [[5, 4, 4], [4, 3, 4], [3, 2, 4], [2, 2, 2], [3, 3, 4], [1, 4, 4], [4, 1, 1]];

function solution(A) {
  const height = A.length - 1;
  const width = A[0].length - 1;
  let count = 0;

  const T = new Array(height * width).fill(0);
  console.log(T.length);
  while (T.indexOf(0) !== -1) {
    const idx = T.indexOf(0);
    const x = Math.floor(idx / width);
    const y = Math.floor(idx % width);
    const curVal = A[x][y];
    const queue = [[x, y]];
    count += 1;
    console.log('idx', idx);
    while (queue.length > 0) {
      const cur = queue.pop();
      console.log('cur', cur);
      const curX = cur[0];
      const curY = cur[1];
      
      T[(curX) * width + curY] = -1;

      if (curX > 0 && A[curX - 1][curY] === curVal && T[(curX - 1) * width + curY] !== -1) {
        queue.push([curX - 1, curY]);
        T[(curX - 1) * width + curY] = -1;
        console.log('1');
        console.log(T);
      }
      console.log('still live');
      console.log(curX, height);
      if (curX < height && A[curX + 1][curY] === curVal && T[(curX + 1) * width + curY] !== -1) {
        queue.push([curX + 1, curY]);
        T[(curX + 1) * width + curY] = -1;
        console.log('2');
        console.log(T);
      }
      console.log('die');
      if (curY > 0 && A[curX][curY - 1] === curVal && T[(curX) * width + curY - 1] !== -1) {
        queue.push([curX, curY - 1]);
        T[(curX) * width + curY - 1] = -1;
        console.log('number 3');
        console.log('fuck youououououou', curX, curY);
        console.log('jkjlkj;kljasdljf', T);
      }
      if (curY < width && A[curX][curY + 1] === curVal && T[(curX) * width + curY + 1] !== -1) {
        queue.push([curX, curY + 1]);
        T[(curX) * width + curY + 1] = -1;
        console.log('4');
        console.log(T);
      }
      console.log(T);
    }

  }

  return count;
}

console.log('ans', solution(test));
