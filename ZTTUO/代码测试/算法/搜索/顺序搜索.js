/**
 * @param {*} item 
 * @returns 
 * 顺序查找时间复杂度：O(n)
 */
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) return i
  }
  return -1
}

console.log([1, 2, 3, 4].sequentialSearch(2))