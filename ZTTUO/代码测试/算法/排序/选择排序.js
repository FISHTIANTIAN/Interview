function _sort(value1, value2) {
  if (value1 > value2) {
    return 1;
  } else if (value1 < value2) {
    return -1;
  } else {
    return 0;
  }
}
function selectionSort(arr) {
  console.time('选择排序耗时');
  let _arr = arr.sort(_sort);
  console.timeEnd('选择排序耗时');
  return _arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));
