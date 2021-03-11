let a = {val: 'a'}
let b = {val: 'b'}
let c = {val: 'c'}
let d = {val: 'd'}

a.next = b
b.next = c
c.next = d

console.log(a)

// 遍历
let p = a
while (p) {
    console.log("遍历:", p.val)
    p = p.next
}

// 插入 e
let e = {val: 'e'}
c.next = e
e.next = d
console.log('插入:', a)

// 删除 e

// 方法1：
// b.next = c
// c.next = d

// 方法2：
e.val = e.next.val
e.next = e.next.next
console.log('删除:', a)

// 反转
let prev = null;
let curr = head;
while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}
// return prev;
