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
  const s1 = [];
  const s2 = [];
  while (l1 !== null) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let sum = 0;
  let list = new ListNode(0);
  while (s1.length || s2.length) {
    if (s1.length) sum += s1.pop();
    if (s2.length) sum += s2.pop();
    list.val = sum % 10;
    const head = new ListNode(Math.floor(sum / 10));
    head.next = list;
    list = head;
    sum = Math.floor(sum / 10);
  }
  return list.val === 0 ? list.next : list;
};