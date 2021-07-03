var mergeTwoLists = function (l1, l2) {
  function merge(n1, n2) {
    if (!n1) return n2
    if (!n2) return n1
    if (n1.val > n2.val) {
      const next = n2.next
      n2.next = merge(n1, next)
      return n2
    } else {
      const next = n1.next
      n1.next = merge(next, n2)
      return n1
    }
  }
  return merge(l1, l2)
}
