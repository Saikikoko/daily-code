/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  if (!head || !head.next || !k) {
    return head
  }
  let prev = head
  let n = 1
  while (head.next) {
    const cur = head
    head = head.next
    head.prev = cur
    n++
  }
  head.next = prev
  prev.prev = head 
  let num = k % n
  while (num) {
    prev = prev.prev
    num--
  }
  prev.prev.next = null
  return prev

};