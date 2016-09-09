/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  if (head === null || head.next === null) return;
  let p1 = head;
  let p2 = head;
  while (p2 && p2.next !== null && p2.next.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  p2 = p1.next;
  p1.next = null;
  
  // reverse the second half p2
  let prev = null;
  while (p2 !== null) {
    let newHead = p2.next;
    p2.next = prev;
    prev = p2;
    p2 = newHead;
  }
  
  p2 = prev;
  p1 = head;

  // start to reorder one by one
  while (p2 !== null) {
    let p1Next = p1.next;
    let p2Next = p2.next;
    
    p1.next = p2;
    p2.next = p1Next;
    p2 = p2Next;
    p1 = p1Next;
  }
};