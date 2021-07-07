/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if (!head || !head.next) {
      return head
  }
  let pre = rhead = new ListNode(null, head)
  let n = 0
  head = head.next // 现在一步
  while (head) {
      if (head.val === pre.next.val) {
          head = head.next
          n++
      } else {
          if (n) {
              if (pre.next.val == rhead.next.val) {
                  rhead.next = head
              }
              pre.next = head
              n = 0
          } else {
              pre = pre.next
          }
          head = head.next
      }
  }
  if (n) {
      if (pre.next.val == rhead.next.val) {
          rhead.next = head
      }
      pre.next = head
      n = 0
  }

  return rhead.next

};
