var removeDuplicateNodes = function(head) {
    let curr = head;
    while(curr && curr.next) {
        if(curr.val == curr.next.val) {
            curr.next = curr.next.next
        }else {
            curr = curr.next
        }
    }
    return head
};

console.log(removeDuplicateNodes(chainList([1, 2, 3, 3, 4, 5])))

