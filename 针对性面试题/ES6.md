- 第一题

```javascript
// 字节跳动面试题 考验对于ES6掌握程度

// 有以下数据结构
const data = [
    {
        key: 'name',
        value: '字节跳动'
    },
    {
        key: 'age',
        value: 1
    },
    {
        key: 'from',
        value: '数据平台'
    }
]

// 实现一个转换函数 processFN
// 根据对应的key、value实现对象
// 要求尽可能多使用ES6新特性，尽可能的少去声明变量，减少副作用

const processFN = data => processData
{
    name: '字节跳动',
    age: 1,
    from: '数据平台'
}

```

```javascript
// 答

// 思路1：
const processFN = data => {
    const processData = {};
    for (let {key, value} of data) {
        Object.assign(processData, {[key]: value})
    } 
    return processData;
}

// 思路2:
const processFN = data => {
    const processData = {};
    for (let {key, value} of data) {
        processData = {...processData, [key]: value}
    } 
    return processData;
}

// 思路3
const processFN = data => data.reduce((obj, {key,value})=>{
    return {...obj, [key]: value}
},{})

// 思路4
const processFN = data => data.reduce((obj, {key,value})=>({...obj, [key]: value}),{})

// 思路5 使用函数式编程和柯里化的库Ramda
const processFN = data => R.reduce(
    R.useWith(R.merge, [
        R.identity,
        Rconverge(R.objOf, [
            R.prop('key'),
            R.prop('value')
        ])
    ]),{}
)
```
