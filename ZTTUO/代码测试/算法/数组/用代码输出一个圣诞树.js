const createChristmasTreeFn = ((ro) => {
    for (let i = 0; i < ro; i++) {
        let tree = ''
        for (let k = ro; k > i + 1; k--) {
            tree += ' '
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            tree += '+'
        }
        console.log(tree)
    }
})
createChristmasTreeFn(6)