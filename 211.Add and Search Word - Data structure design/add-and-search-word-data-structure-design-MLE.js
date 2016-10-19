/**
 * @constructor
 */
const WordDictionary = function () {
  this.trieNode = new Array(27); // add a-z and one special cahr '.'
  this.trieNode[26] = []; // to store every char occured in current node
  this.isWord = false;
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function (word) {
  let root = this;
  for (let i = 0; i < word.length; i++) {
    const pos = word[i].charCodeAt(0) - 97;
    if (!root.trieNode[pos]) {
      root.trieNode[pos] = new WordDictionary();
      // for special char '.', point to the same place as current char
      root.trieNode[26].push(root.trieNode[pos]);
    }
    root = root.trieNode[pos];
  }
  root.isWord = true;
};

const helper = function (word, node) {
  return WordDictionary.prototype.search(word, node);
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function (word, node) {
  let root;
  if (node !== undefined) {
    root = node;
  } else {
    root = this;
  }
  for (let i = 0; i < word.length; i++) {
    // console.log(i, word[i], word);
    if (word[i] === '.') {
      for (const n of root.trieNode[26]) {
        const res = helper(word.substr(i + 1), n);
        if (res === true) return true;
      }
      return false;
    }

    const pos = word[i].charCodeAt(0) - 97;
    if (root.trieNode[pos] === undefined) return false;
    root = root.trieNode[pos];
  }
  return root.isWord;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
const w = new WordDictionary();
w.addWord('a');
// console.log(w);
w.addWord('ab');
console.log(w.search('a'));
// console.log(w);
