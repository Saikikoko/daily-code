/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let slow = fast = head
  fast = head.next
  while (fast.next) {
      if (fast.val === slow.val) {
          slow.next = fast.next
          fast.next = null
          fast = slow.next
      } else {
          fast = fast.next
          slow = slow.next
      }
  }
  if (fast.val === slow.val) {
      slow.next = null
  }
  return head

};
