/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  let node = new ListNode(null);
  node.next = head;
  const resHead = node;

  while (node !== null) {
    if (node.next && node.next.val === val) {
      node.next = node.next.next;
    }
    else {
      node = node.next;
    }
  }
  return resHead.next;
};
