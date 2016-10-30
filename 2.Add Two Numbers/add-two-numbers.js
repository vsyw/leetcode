/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let sum = 0;
  const head = new ListNode(0);
  let node = head;
  while (l1 !== null || l2 !== null) {
    sum = Math.floor(sum / 10);
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    node.next = new ListNode(sum % 10);
    node = node.next;
  }
  if (Math.floor(sum / 10) === 1) node.next = new ListNode(1);
  return head.next;
};
