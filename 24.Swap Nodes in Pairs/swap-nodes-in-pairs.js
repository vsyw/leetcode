/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  const newHead = new ListNode(null);
  newHead.next = head;
  let prev = newHead;
  let node = head;

  while (node !== null) {
    if (node.next !== null) {
      const tmp = node.next;
      node.next = node.next.next;
      tmp.next = node;
      prev.next = tmp;
      prev = node;
    }
    node = node.next;
  }
  return newHead.next;
};
