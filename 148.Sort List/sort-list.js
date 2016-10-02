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
function merge(h1, h2) {
  let res = new ListNode();
  let resHead = res;
  while (h1 !== null && h2 !== null) {
    if (h1.val < h2.val) {
      res.next = h1;
      h1 = h1.next;
    } else {
      res.next = h2;
      h2 = h2.next;
    }
    res = res.next;
  }
  if (h1 !== null) res.next = h1;
  if (h2 !== null) res.next = h2;
  return resHead.next;
}

const sortList = function (head) {
  if (head === null || head.next === null) return head;
  let slow = head;
  let fast = head.next.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const h2 = sortList(slow.next);
  slow.next = null;
  return merge(sortList(head), h2);
};