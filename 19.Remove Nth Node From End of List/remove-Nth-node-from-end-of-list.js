/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 雙頭龍，一快一慢向前衝
 */
const removeNthFromEnd = function (head, n) {
  if (head === null) return head;
  let fast = head;
  let slow = head;
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  if (fast === null) {
    return head = head.next;
  }
  slow.next = slow.next.next;
//   slow.next.next = null;
  return head;
};
