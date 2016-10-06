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
const deleteDuplicates = function (head) {
  const newHead = new ListNode();
  newHead.next = head;
  let slow = newHead;
  let fast = newHead.next;
  while (fast !== null) {
    while (fast.next !== null && fast.val === fast.next.val) {
      fast = fast.next;
    }
    if (slow.next === fast) slow = slow.next;
    else {
      slow.next = fast.next;
    }
    fast = fast.next;
  }
  return newHead.next;
};
