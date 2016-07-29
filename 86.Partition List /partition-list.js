/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const partition = function (head, x) {
  let front = new ListNode(0);
  let fpointer = front;
  let back = new ListNode(0);
  let bpointer = back;

  while (head !== null) {
    if (head.val < x) {
      fpointer.next = head;
      fpointer = fpointer.next;
    } else {
      bpointer.next = head;
      bpointer = bpointer.next;
    }
    head = head.next;
  }
  bpointer.next = null;
  fpointer.next = back.next;
  return front.next;
};
