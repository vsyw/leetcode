/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    let c = i.toString();
    console.log(c);
    if (i % 3 === 0) {
      c = 'Fizz';
    }
    if (i % 5 === 0) {
      c = 'Buzz';
    }
    if (i % 15 === 0) {
      c = 'FizzBuzz';
    }

    res.push(c);
  }
  return res;
};

console.log(fizzBuzz(15));
