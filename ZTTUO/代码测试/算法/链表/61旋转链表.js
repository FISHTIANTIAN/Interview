var rotateRight = function (head, k) {
    if(k == 0) return head
    let fast = head
    let len = head
    let length = 0
    let count = 0
    let item = null
    while (len) {
        len = len.next
        length++
    }
    while (fast) {
        if (count == k%length) {
            item = fast.next
            fast.next = null
        }
        fast = fast.next
        count++
    }
    let p1 = item
    console.log(head,p1)
    while (p1) {
        if (p1.next == null) {
            p1.next = head
            break;
        }
        p1 = p1.next
    }
    // console.log(item)
    // return item

};

rotateRight(chainList([1, 2, 3, 4, 5]), 1)
// console.log(rotateRight(chainList([1, 2, 3, 4, 5]), 1)) // [4,5,1,2,3]