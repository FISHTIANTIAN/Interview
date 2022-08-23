var swapPairs = function (head) {
  let pa = head;
  let pb = null;
  let count = 0
  while (pa) {
    let item = pa.next
    pa.next = pb;
    pb = pa;
    pa = item
    console.log(pa, pb)
  }
  return pb
};
swapPairs(chainList([1, 2, 4, 3]))
// console.log(swapPairs(chainList([1, 2, 4, 3])))
