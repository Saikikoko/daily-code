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
      head = head.next
      n++
  }
  if (k % n === 0) {
      return prev
  }
  head.next = prev
  head = head.next
  let num = n - k % n - 1 // 最后一个节点位置
  while (num) {
      head = head.next
      num--
  }
  prev = head.next
  head.next = null
  return prev
};