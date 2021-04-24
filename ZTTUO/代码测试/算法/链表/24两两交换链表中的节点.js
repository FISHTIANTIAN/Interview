var swapPairs = function(head) {
    let n = new ListNode(null)
    n.next = head
    let p = n
    while (p.next!=null && p.next.next!=null) {
        let n1 = p.next
        let n2 = p.next.next
        p.next = n2
        n1.next = n2.next
        n2.next = n1
        p = n1
    }
    return n.next
}
console.log(swapPairs(chainList([3, 4, 9, 2])))