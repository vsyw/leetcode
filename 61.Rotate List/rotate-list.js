/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) { return head; }
  let length = 1;
  let tail = head;
  while (tail.next !== null) { // get the nubmer of nodes in the list
    tail = tail.next;
    length++;
  }
  tail.next = head; // cricle the link
  let nTail = head;
  let count = 1;
  while (count < length - (k % length)) {
    nTail = nTail.next;
    count++;
  }
  head = nTail.next;
  nTail.next = null;
  return head;
};

