var removeNthFromEnd = function(head, n) {  
  const pre = new ListNode(null)
  if (head.next == null) {
      return pre.next
  }
  pre.next = head
  let fast = pre
  let slow = pre
  while (n !== 0) {
      fast = fast.next
      n--
  }
  while (fast.next !== null) {
      fast = fast.next
      slow = slow.next
  }
  slow.next = slow.next.next
  return pre.next
};