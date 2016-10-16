/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
const doCopy = function (head, map) {
  if (head === null) return null;
  
  if (map.hasOwnProperty(head.label)) {
    return map[head.label];
  }
  
  const node = new RandomListNode(head.label);
  map[node.label] = node;
  node.next = doCopy(head.next, map);
  node.random = doCopy(head.random, map);

  return node;
}

const copyRandomList = function (head) {
  let map = {};
  return doCopy(head, map);
};
