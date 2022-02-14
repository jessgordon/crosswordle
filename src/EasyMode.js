export default EasyMode;

const WILDCARD = "?";

class Trie {
  constructor() {
    this.children = {};
    this.isLeaf = false;
  }

  insert(word) {
    let node = this;
    for (const char of word) {
      if (!(char in node.children)) {
        node.children[char] = new Trie();
      }
      node = node.children[char];
    }
    node.isLeaf = true;
  }

  find(word) {
    let stack = [[this, 0, ""]];
    let result = [];

    while (stack.length > 0) {
      const [currentNode, count, currentNodeWord] = stack.pop();

      if (count === word.length) {
        if (currentNode.isLeaf) {
          result.push(currentNodeWord);
        }
        continue;
      }

      let currentNodeChar = word[count];

      if (currentNodeChar === WILDCARD) {
        for (const [childChar, node] of Object.entries(currentNode.children)) {
          let x = [node, count + 1, currentNodeWord + childChar];
          stack.push(x);
        }
        continue;
      }

      if (currentNodeChar in currentNode.children) {
        let node = currentNode.children[currentNodeChar];
        let x = [node, count + 1, currentNodeWord + currentNodeChar];
        stack.push(x);
      }
    }
    return result;
  }
}

function EasyMode(wordList) {
  let trie = new Trie();
  for (let word of wordList) {
    trie.insert(word);
  }

  const diagonal =
    wordList[Math.floor(Math.random() * wordList.length)].split("");
  const questionMarks = "?????".split("");
  const output = [];

  for (let i = 0; i < diagonal.length; i++) {
    questionMarks[i] = diagonal[i];
    let tmp = trie.find(questionMarks);
    output.push(tmp[Math.floor(Math.random() * tmp.length)]);
    questionMarks[i] = "?";
  }

  console.log(diagonal);
  console.log(output);
  let finalOutput = output.join("");

  finalOutput.toUpperCase().split("");
  console.log(finalOutput);
}
