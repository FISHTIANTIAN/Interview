- 第一题

```javascript
Function.prototype.a = () => {
  console.log(1)
}

Object.prototype.b = () => {
  console.log(2)
}

function A() { }
const a = new A()

// 求：
a.a()
a.b()
A.a()
A.b()
```

- 第二题

```javascript
function Page() {
    return this.hosts;
}
Page.hosts = ['h1'];
Page.prototype.hosts = ['h2'];
const p1 = new Page();
const p2 = Page();

// 求：
console.log(p1);
console.log(p1.hosts);
console.log(p2);
Window.prototype.hosts = ['hosts']
console.log(Page());
console.log(p2.hosts);
```