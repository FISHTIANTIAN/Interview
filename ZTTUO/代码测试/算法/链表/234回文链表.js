var isPalindrome = function (head) {
  let a = '', b = '';
  while (head != null) {
    a = a + head.val;
    b = head.val + b;
    console.log(a, b)
    head = head.next;
  }
  return a === b;
};

console.log(isPalindrome(chainList([1, 2, 2, 1])))