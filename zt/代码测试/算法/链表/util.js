// 链表节点
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// 将数组转化为链表
function chainList(arr) {
  let head = new ListNode(arr[0]);
  let tail = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    tail.next = node;
    tail = node;
  }
  return head;
}
// 构建一个栈
const createStack = () => {
  class Stack {
    constructor() {
      this.top = 0;
      this.stores = [];
    }
    push(item) {
      this.top++;
      return this.stores.push(item)
    }
    pop() {
      this.top--
      return this.stores.pop()
    }
    peer() {
      return this.stores[this.stores.length - 1]
    }
    isEmpty() {
      return this.top == 0;
    }
  }
  return new Stack();
}