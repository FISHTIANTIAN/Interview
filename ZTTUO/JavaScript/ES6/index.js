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
