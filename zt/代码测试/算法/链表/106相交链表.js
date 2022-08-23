var getIntersectionNode = function (headA, headB) {
  // 清除高度差
  let pA = headA, pB = headB
  while (pA || pB) {
    if (pA === pB) return pA
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return null
};

console.log(getIntersectionNode(chainList([4, 1, 8, 4, 5]), chainList([5, 6, 1, 8, 4, 5])))