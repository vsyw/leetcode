/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (head === null) return true;
  let fast = head;
  let slow = head;
  let pre = null;
  // move slow to the middle of the linked list
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    const tmp = slow.next;
    slow.next = pre;
    pre = slow;
    slow = tmp;
  }
  if (fast === null) { // the number of linked list is even
    fast = pre;
    while (slow !== null) {
      if (fast.val !== slow.val) return false;
      fast = fast.next;
      slow = slow.next;
    }
  } else { // the number of linked list is odd
    fast = pre;
    slow = slow.next;
    while (slow !== null) {
      if (fast.val !== slow.val) return false;
      fast = fast.next;
      slow = slow.next;
    }
  }
  return true;
};
