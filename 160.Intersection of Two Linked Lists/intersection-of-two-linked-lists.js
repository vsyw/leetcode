/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;
  let lengthA = 0;
  let lengthB = 0;
  while (a) {
    lengthA++;
    a = a.next;
  }
  while (b) {
    lengthB++;
    b = b.next;
  }
  if (a !== b) return null;

  a = headA;
  b = headb;
  if (lengthA > lengthB) {
    for (let i = 0; i < lengthA - lengthB; i++) a = a.next;
  } else {
    for (let j = 0; j < lengthB - lengthA; j++) b = b.next;
  }
  while (a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
};
