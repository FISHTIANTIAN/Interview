const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('result')
    }, 1000)
})

p1.then(res => {console.log(res)}, err => {console.log(err)})