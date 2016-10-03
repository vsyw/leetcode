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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const data = new ListNode(4);
data.next = new ListNode(19);
data.next.next = new ListNode(5);
data.next.next.next = new ListNode(-3);
data.next.next.next.next = new ListNode(1);

const insertionSortList = function (head) {
  let newHead = new ListNode(Number.MIN_SAFE_INTEGER);
  newHead.next = head;
  while (head.next !== null) {
    let p = newHead;
    const next = head.next.next;
    while (p !== head.next && p.next !== null) {
      if (p.next.val > head.next.val) {
        head.next = next;
        head.next.next = p.next;
        p.next = head.next;
        break;
      } else {
        p = p.next;
      }
    }
    console.log('//////////////////');
    let n = newHead;
    while(n !== null) {
      console.log(n.val);
      n = n.next;
    } 

    head = next;
  }
  
  // return newHead.next;
};

console.log('ans', insertionSortList(data));
