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

Promise.resolve().then(()=>{
    console.log(1)
    return Promise.resolve(2)
})
.then(res => {
    console.log(res)
})

Promise.resolve().then(()=>{
    console.log(3)
}).then(()=>{
    console.log(4)
}).then(()=>{
    console.log(5)
}).then(()=>{
    console.log(6)
})