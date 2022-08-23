var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0);
  let lv1 = l1;
  let lv2 = l2;
  let lv3 = l3;
  let carry = 0;
  while (lv1 || lv2) {
    let item1 = lv1 ? lv1.val : 0;
    let item2 = lv2 ? lv2.val : 0;
    let val = item1 + item2 + carry;
    carry = Math.floor(val / 10);
    lv3.next = new ListNode(val % 10);
    if (lv1) lv1 = lv1.next;
    if (lv2) lv2 = lv2.next;
    lv3 = lv3.next;
  }
  if (carry) {
    lv3.next = new ListNode(carry)
  }

  return l3.next
};

console.log(addTwoNumbers(chainList([9, 4, 3]), chainList([5, 6, 4])))
