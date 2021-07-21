console.log(1);

setTimeout(() => {
    console.log(2);
    setTimeout(() => {
        console.log(14);
        new Promise((resolve, reject) => {
            console.log(15);
            resolve()
        }).then(res => {
            console.log(16);
        })
    })
    new Promise((resolve, reject) => {
        console.log(3);
        resolve()
    }).then(res => {
        console.log(4);
    })
})

new Promise((resolve, reject) => {
    resolve()
}).then(res => {
    console.log(5);
}).then(res => {
    console.log(6);

})

new Promise((resolve, reject) => {
    console.log(7);
    resolve()
}).then(res => {
    console.log(8);
}).then(res => {
    console.log(9);
})

setTimeout(() => {
    console.log(10);
    new Promise((resolve, reject) => {
        console.log(11);
        resolve()
    }).then(res => {
        console.log(12);
    })
})

console.log(13);

VM1751:48 7
VM1751:48 13
VM1751:23 5
VM1751:33 8
VM1751:25 6
VM1751:35 9
undefined
VM1751:2 2
VM1751:13 3
VM1751:16 4
VM1751:39 10
VM1751:41 11
VM1751:44 12
VM1751:4 14
VM1751:6 15
VM1751:9 16