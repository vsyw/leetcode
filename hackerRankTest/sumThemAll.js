/*
 * Complete the function below.
 */
function summation(numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
}

console.log(summation([5, 1, 2, 3, 4, 5]));
