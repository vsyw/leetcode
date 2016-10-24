/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  let a = 0;
  let b = 0;
  const table = {};
  const visited = new Array(secret.length).fill(false);

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      a++;
      visited[i] = true;
    } else if (table.hasOwnProperty(secret[i])) {
      table[secret[i]]++;
    } else {
      table[secret[i]] = 1;
    }
  }
  // console.log(table);
  for (let i = 0; i < guess.length; i++) {
    if (!visited[i]) {
      if (table.hasOwnProperty(guess[i]) && table[guess[i]] > 0) {
        b++;
        table[guess[i]]--;
      }
    }
  }
  return `${a}A${b}B`;
};

console.log(getHint('1122', '1222'));
