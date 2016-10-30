/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  if (head === null) return null;

  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  for (let i = 0; i < m - 1; i++) pre = pre.next;
  let start = pre.next;
  let then = start.next;

  for (let i = 0; i < n - m; i++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }
  return dummy.next;
};
