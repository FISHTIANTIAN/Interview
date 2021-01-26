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

- 第三题

```javascript
function Parent(){
    this.name = "parent";
    this.list = ['a'];
}
Parent.prototype.sayHi = function(){
    console.log('hi');
}
function Child(){

}
Child.prototype = new Parent();
var child = new Child();
console.log(child.name);
child.sayHi();
var a = new Child();
var b = new Child();
a.list.push('b');
a.name= 'a';
console.log(b.list);
console.log(a.list);
console.log(b.name);

function Child1(){
    this.list = ['a'];
}
var a1 = new Child1();
var b1 = new Child1();
a1.list.push('b');
console.log(b1.list);
console.log(a1.list);
```