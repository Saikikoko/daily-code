/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const retNode = new ListNode(0)
  let cur = retNode
  let jin = 0
  while (l1 || l2) {
      const val1 = l1 && l1.val || 0
      const val2 = l2 && l2.val || 0
      const val = val1 + val2 + jin
      jin = Math.floor(val / 10)
      const node = new ListNode(val % 10)
      cur.next = node
      cur = node
      l1 = l1 && l1.next
      l2 = l2 && l2.next
  }
  if (jin) {
      cur.next = new ListNode(jin)
  }
  return retNode.next
};