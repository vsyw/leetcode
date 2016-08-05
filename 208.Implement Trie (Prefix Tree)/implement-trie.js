/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function () {
  this.isWord = 0;
  this.children = {};
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function (word) {
  if (word.length === 0) {
    return;
  }
  let p = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!p.children.hasOwnProperty(word[i])) {
      p.children[word[i]] = new TrieNode();
    }
    p = p.children[word[i]];
  }
  p.isWord++;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function (word) {
  let p = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!p.children.hasOwnProperty(word[i])) {
      return false;
    }
    p = p.children[word[i]];
  }
  // console.log('show ', p.isWord);
  return p.isWord > 0;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function (prefix) {
  let p = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (!p.children.hasOwnProperty(prefix[i])) {
      return false;
    }
    p = p.children[prefix[i]];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

var trie = new Trie();
trie.insert('abc');
console.log(trie.search('abc'));
console.log(trie.search('ab'));
trie.insert('ab');
console.log(trie.search('ab'));
trie.insert('ab');
console.log(trie.search('ab'));

// console.log(trie.startsWith('a'));
// trie.insert('fuckyou');
// trie.insert('shit');
// trie.insert('test');
// console.log(trie.search('fu'));
















