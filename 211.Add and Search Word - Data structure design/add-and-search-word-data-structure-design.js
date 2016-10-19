/**
 * @constructor
 */
const TrieNode = function () {
  this.node = new Array(26);
  this.isWord = false;
};

const WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function (word) {
  let root = this.root;
  for (let i = 0; i < word.length; i++) {
    const pos = word[i].charCodeAt(0) - 97;
    if (!root.node[pos]) {
      root.node[pos] = new TrieNode();
    }
    root = root.node[pos];
  }
  root.isWord = true;
};

const traverse = function (word, node) {
  let root = node;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '.') {
      for (let j = 0; j < 26; j++) {
        if (root.node[j] !== undefined) {
          if (traverse(word.substr(i + 1), root.node[j])) {
            return true;
          }
        }
      }
      return false;
    } else {
      const pos = word[i].charCodeAt(0) - 97;
      if (root.node[pos] === undefined) return false;
      root = root.node[pos];
    }
  }
  return root.isWord;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function (word) {
  return traverse(word, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
const w = new WordDictionary();
w.addWord('fuck');
// console.log(w);
w.addWord('you');
console.log(w.search('fuc.'));

// console.log(w);
