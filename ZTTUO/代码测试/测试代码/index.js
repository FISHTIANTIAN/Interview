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

var b = 10; 
(function a(){
    b = 20
})()
console.log(b)