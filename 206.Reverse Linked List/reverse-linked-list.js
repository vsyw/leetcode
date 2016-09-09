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
const reverseList = function (head) {
  let prev = null;
  while (head !== null) {
    let newHead = head.next;
    head.next = prev;
    prev = head;
    head = newHead;
  }
  return prev;
};