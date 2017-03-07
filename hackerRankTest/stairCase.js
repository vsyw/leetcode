/*
 * Complete the function below.
 */
function StairCase(n) {
  for (let i = 1; i <= n; i++) {
    let str = ' '.repeat(n - i);
    str += '#'.repeat(i);
    console.log(str, '\n');
  }
}

console.log(StairCase(1));
