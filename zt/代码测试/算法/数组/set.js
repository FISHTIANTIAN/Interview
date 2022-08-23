// 数组去重
const arr = [1, 1, 2, 3, 4, 4]
const arrSet = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has1 = set.has(1) // true
const has5 = set.has(5) // false

// 求交集
const set2 = new Set([2, 3])
const setIntersection = new Set([...set].filter(item => set2.has(item)))
