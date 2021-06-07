/**
 * 78. 子集
 * @param {number[]} nums
 * @return {number[][]}
 */

// 拓展法
var subsets = function (nums) {
  let res = [[]]
  const addRes = (n) => {
    let temp = []
    for (let i of res) {
      let data = Object.assign([], i)
      data.push(n)
      temp.push(data)
    }
    return temp
  }
  nums.forEach((item) => {
    let out = addRes(item)
    res.push(...out)
  })
  console.log(res)
  return res
};
subsets([1, 2, 3])