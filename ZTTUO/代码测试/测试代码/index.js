// console.log(1);

// setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//         console.log(14);
//         new Promise((resolve, reject) => {
//             console.log(15);
//             resolve()
//         }).then(res => {
//             console.log(16);
//         })
//     })
//     new Promise((resolve, reject) => {
//         console.log(3);
//         resolve()
//     }).then(res => {
//         console.log(4);
//     })
// })

// new Promise((resolve, reject) => {
//     resolve()
// }).then(res => {
//     console.log(5);
// }).then(res => {
//     console.log(6);
// })

// new Promise((resolve, reject) => {
//     console.log(7);
//     resolve()
// }).then(res => {
//     console.log(8);
// }).then(res => {
//     console.log(9);
// })

// setTimeout(() => {
//     console.log(10);
//     new Promise((resolve, reject) => {
//         console.log(11);
//         resolve()
//     }).then(res => {
//         console.log(12);
//     })
// })

// console.log(13);

// // 1 7 13 5 8 6 9 2 3 4 10 11 12 14 15 16

// var b = 10; 
// (function a(){
//     b = 20
// })()
// console.log(b)

// var btn = document.getElementById('center');
// btn.addEventListener('click', function(){
//     Promise.resolve().then(()=>{
//         console.log('M1')
//     })
//     console.log('l1')
// })

// btn.addEventListener('click', function(){
//     Promise.resolve().then(()=>{
//         console.log('M2')
//     })
//     console.log('l2')
// })

// btn.click();

// Promise.resolve().then(()=>{
//     console.log(1)
//     return Promise.resolve(2)
// })
// .then(res => {
//     console.log(res)
// })

// Promise.resolve().then(()=>{
//     console.log(3)
// }).then(()=>{
//     console.log(4)
// }).then(()=>{
//     console.log(5)
// }).then(()=>{
//     console.log(6)
// })

// setTimeout(function(){
//     console.log('定时器开始啦')
// });

// new Promise(function(resolve){
//     console.log('马上执行for循环啦');
//     for(var i = 0; i < 10000; i++){
//         i == 99 && resolve();
//     }
// }).then(function(){
//     console.log('执行then函数啦')
// });

// console.log('代码执行结束');

// function myInstanceof(left, right) {
//     let proto = Object.getPrototypeOf(left), // 获取对象的原型
//         prototype = right.prototype; // 获取构造函数的 prototype 对象

//     // 判断构造函数的 prototype 对象是否在对象的原型链上
//     while (true) {
//         if (!proto) return false;
//         if (proto === prototype) return true;

//         proto = Object.getPrototypeOf(proto);
//     }
// }

// window.number = 2;
// var obj = {
//     number: 3,
//     db1: (function(){
//         console.log(this); // window
//         this.number *= 4; // window.number = 8
//         return function(){
//             console.log(this);
//             this.number *= 5;
//         }
//     })()
// }
// var db1 = obj.db1;
// db1(); // this -> window, window.number = 40
// obj.db1(); // this -> obj, obj.number = 15
// console.log(obj.number);   
// console.log(window.number);

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}
var multi = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                console.log(num * num);
                resolve(num * num)
            } else {
                reject(new Error('num not specified'))
            }
        }, 1000)
    })
}
async function test() {
    var nums = await Promise.resolve([1, 2, 3, 4, 5, 6])
    asyncForEach(nums, async x => {
        await multi(x)
    })
}
test()