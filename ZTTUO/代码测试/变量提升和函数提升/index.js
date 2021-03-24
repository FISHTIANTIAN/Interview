/*
 * 变量提升 & 函数提升
 */

// 变量提升
// var foo = function () {
//     console.log('foo1');
// }
//
// foo();  // foo1
//
// var foo = function () {
//     console.log('foo2');
// }
//
// foo(); // foo2

// 函数提升
// function foo() {
//     console.log('foo1');
// }
//
// foo1();  // foo1
//
// function foo1() {
//     console.log('foo2');
// }
//
// foo(); // foo2

// 测试 函数声明 & 匿名函数表达式 & 具名函数表达式 的提升
// foo() // function declaration
// // 函数声明
// function foo() {
//     console.log('function declaration');
// }
// foo() // function declaration
// // 匿名函数表达式
// var foo = function() {
//     console.log('anonymous function expression');
// };
// foo() // anonymous function expression
// // 具名函数表达式
// var foo = function bar() {
//     console.log('named function expression');
// };
// foo() // named function expression


// var fn = null;
// function foo() {
//     var a = 2;
//     function innnerFoo() {
//         console.log(c);
//         console.log(a);
//     }
//     fn = innnerFoo;
// }
// function bar() {
//     var c = 100;
//     fn();
// }
//
// foo();
// bar();

// Function.prototype.a = () => {
//     console.log(1)
// }
//
// // 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Object.prototype继承属性和方法。
// Object.prototype.b = () => {
//     console.log(2)
// }
//
// function A() { }
// const a = new A()
//
// // 求：
// // a.a() //is not a function
// a.b() //2
// A.a() //1
// A.b() //2


