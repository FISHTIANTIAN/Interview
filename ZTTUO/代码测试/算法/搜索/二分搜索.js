/**
 * @param {*} item 
 * @returns 
 * 二分查找时间复杂度：O(logN)
 */
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (this[mid] < item) {
      low = mid + 1
    } else if (this[mid] > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}