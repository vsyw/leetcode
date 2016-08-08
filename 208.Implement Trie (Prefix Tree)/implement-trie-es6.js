class TrieNode {
  
  constructor() {
    this.isWord = 0;
    this.children = {};
  }

  insert(word) {
    if (word.length === 0) {
      return;
    }
    let p = this;
    for (let i = 0; i < word.length; i++) {
      if (!p.children.hasOwnProperty(word[i])) {
        p.children[word[i]] = new TrieNode();
      }
      p = p.children[word[i]];
    }
    p.isWord++;
  }

  search(word) {
    let p = this;
    for (let i = 0; i < word.length; i++) {
      if (!p.children.hasOwnProperty(word[i])) {
        return false;
      }
      p = p.children[word[i]];
    }
    // console.log('show ', p.isWord);
    return p.isWord > 0;
  }

  startsWith(prefix) {
    let p = this;
    for (let i = 0; i < prefix.length; i++) {
      if (!p.children.hasOwnProperty(prefix[i])) {
        return false;
      }
      p = p.children[prefix[i]];
    }
    return true;
  }
}

const head = new TrieNode();
head.insert('幹你娘 老機吧');
console.log(head.startsWith('幹你娘'));
