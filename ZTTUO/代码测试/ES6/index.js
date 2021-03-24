// const data = [
//     {
//         key: 'name',
//         value: '字节跳动'
//     },
//     {
//         key: 'age',
//         value: 1
//     },
//     {
//         key: 'from',
//         value: '数据平台'
//     }
// ];
//
// const processFN = data => data.reduce((obj, {key, value}) => ({...obj, [key]: value}), {});
//
// console.log(processFN(data))
//
// for (var item of data) {
//     for (var key in item) {
//         console.log('键：' + key)
//         console.log('值：' + item[key])
//     }
// }
//
// const dataItem = {
//     key: 'from',
//     value: '数据平台'
// }
//
// console.log('key：' + Object.getOwnPropertyNames(dataItem)) //[key,value]
//
//
// class Functor {
//     constructor(val) {
//         this.val = val;
//     }
//
//     map(f) {
//         return new Functor(f(this.val));
//     }
// }
//
// console.log(
//     (new Functor('flamethrowers')).map(function(s) {
//         return s.toUpperCase();
//     })
// )
//
// Functor.of = function(val) {
//     return new Functor(val);
// };
//
// console.log(
//     Functor.of(2).map(function (two) {
//         return two + 2;
//     })
//     // Functor(4)
// )
//
//
//
//
// function Foo() {
//     var i = 0;
//     return function() {
//         console.log(i++);
//     }
// }
//
// var f1 = Foo(),
//     f2 = Foo();
// f1();
// f1();
// f2();
//
//
// var bb = 1;
// function aa(bb) {
//     bb = 2;
//     alert(bb);
// };
// aa(bb);
// alert(bb);

// const arr = {
//     'nama': 'xx',
//     'xxx': {
//         'xx1':11,
//         'xx2':11
//     }
// }
//
// Object.prototype.test = 'bug'
// for (const key in arr.xxx) {
//     console.log(key)
// }

// Object.prototype.hack = '污染原型的属性';
// const obj = { name: 'xiaoHong', age: 18 };
// for (const key in obj) {
//     console.log(key);
//
//     if (obj.hasOwnProperty(key)) {
//         console.log(obj[key]);
//     }
// }

// function Page() {
//     return this.hosts;
// }
// Page.hosts = ['h1'];
// Page.prototype.hosts = ['h2'];
//
// const p1 = new Page();
// const p2 = Page();
//
//
// console.log(p1);
// console.log(p1.hosts);
// console.log(p2);
// Window.prototype.hosts = ['hosts']
// console.log(Page());
// console.log(p2.hosts);


// let a = {
//     n: 1
// };
// let b = a;
// a = {
//     n: 2
// };
// a.x = a = {
//     n: 2
// };
// console.log(a.x);
// console.log(b);
// console.log(a);

// function changeAgeAndReference(person) {
//     console.log(person)
//     person.age = 25;
//     console.log(person)
//     person = {
//         name: "John",
//         age: 50
//     };
//     console.log(person)
//     return person;
// }
// var personObj1 = {
//     name: "Alex",
//     age: 30
// };
// var personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

// let x = [1, 2, 3];
// let y = x;
// let z = [4, 5, 6];
// y[0] = 10;
// y = z;
// z[1] = 20;
// x[2] = z = 30;
// console.log(x, y, z); // [10, 2, 30], [4, 20, 6], 30

// function Otaku (name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.habit = 'Games';
// }
//
// Otaku.prototype.strength = 60;
//
// Otaku.prototype.sayYourName = function () {
//     console.log('I am ' + this.name);
// }
//
// function objectFactory() {
//
//     var obj = new Object();
//
//     Constructor = [].shift.call(arguments);
//
//     obj.__proto__ = Constructor.prototype;
//
//     var ret = Constructor.apply(obj, arguments);
//
//     return typeof ret === 'object' ? ret : obj;
//
// };
//
// var person = objectFactory(Otaku, 'Kevin', '18')
//
// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60
//
// person.sayYourName(); // I am Kevin

// function Parent(){
//     this.name = "parent";
//     this.list = ['a'];
// }
// Parent.prototype.sayHi = function(){
//     console.log('hi');
// }
// function Child(){
//
// }
// Child.prototype = new Parent();
// var child = new Child();
// console.log(child.name);
// child.sayHi();
// var a = new Child();
// var b = new Child();
// a.list.push('b');
// a.name= 'a';
// console.log(b.list);
// console.log(a.list);
// console.log(b.name);
//
// function Child1(){
//     this.list = ['a'];
// }
// var a1 = new Child1();
// var b1 = new Child1();
// a1.list.push('b');
// console.log(b1.list);
// console.log(a1.list);