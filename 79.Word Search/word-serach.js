/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function replaceOneChar(input, index, char) {
  return input.substr(0, index) + char + input.substr(index + 1);
}

function backtrack(board, word, i, j) {
  console.log('////////////////////////////////////////////');
  board[i] && console.log(board[i][j]);
  console.log('i:', i, 'j:', j, word);
  if (word.length === 0) return true;
  
  if (!!board[i] && !!board[i][j] && board[i][j] === word[0]) {
    if (typeof board[i] === 'string') {
      board[i] = replaceOneChar(board[i], j, '*');
    } else {
      board[i][j] = '*';
    }

    const result = (backtrack(board, word.substr(1), i, j + 1) ||
      backtrack(board, word.substr(1), i, j - 1) ||
      backtrack(board, word.substr(1), i + 1, j) ||
      backtrack(board, word.substr(1), i - 1, j));
    
    if (typeof board[i] === 'string') {
      board[i] = replaceOneChar(board[i], j, word[0]);
    } else {
      board[i][j] = word[0];
    }
    
    return result;
  }
}

const exist = function (board, word) {
  

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(board, word, i, j)) {
        return true;
      }
    }
  }
  return false;
};

console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], "ABCB"));

// if (!!board[i][j + 1] && board[i][j + 1] === word[0]) {
  //   backtrack(board, word.substr(1), [i, j+1]);
  // }
  // if (!!board[i][j - 1] && board[i][j - 1] === word[0]) {
  //   backtrack(board, word.substr(1), [i, j - 1]);
  // }
  // if (!!board[i + 1][j] && board[i + 1][j] === word[0]) {
  //   backtrack(board, word.substr(1), [i + 1, j]);
  // }
  // if (!!board[i - 1][j] && board[i - 1][j] === word[0]) {
  //   backtrack(board, word.substr(1), [i - 1, j]);
  // }






