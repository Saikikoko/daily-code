/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const prev = new ListNode(null, head)
    let cur = head
    const arr = []
    while(cur) {
        arr.push(cur)
        cur = cur.next
    } 
    const index = arr.length - n
    const l1 = arr[index]
    if (index === 0) {
        prev.next = l1.next
        l1.next = null
    } else {
        const l2 = arr[index-1]
        l2.next = l1.next
        l1.next = null
    }
   
    return prev.next
};