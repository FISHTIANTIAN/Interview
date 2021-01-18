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
