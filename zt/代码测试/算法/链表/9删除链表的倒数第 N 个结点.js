var removeNthFromEnd = function (head, n) {
  let pA = head;
  let pB = head;
  let count = 0;
  while (pA || pB) {
    if (count >= n) {
      pA = pA.next
    }
    pB = pB.next;
    count++
  }

  return pA
};