/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  if (!head) {
      return head
  }

  function get(node) {
      if (!node.next) {
          if (node.val === val) {
              return null
          } else {
              return node
          }
      } else {
          if (node.val === val) {
              return get(node.next)
          } else {
              node.next = get(node.next)
              return node
          }
      }
  }
  return get(head)
};
