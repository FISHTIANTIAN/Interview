// 冒泡排序 - 基础版
function bubbleSort_1(arr) {
  console.time('基础版冒泡排序耗时');
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      /* 升序 */
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
      /* 降序 */
      // if (arr[j] < arr[j + 1]) {
      //   let temp = arr[j]
      //   arr[j] = arr[j + 1]
      //   arr[j + 1] = temp
      // }
    }
  }
  console.timeEnd('基础版冒泡排序耗时');
  return arr
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort_1(arr));

// 冒泡排序 - 优化版
function bubbleSort_2(arr) {
  console.time('优化版冒泡排序耗时');
  var i = arr.length - 1;  //初始时,最后位置保持不变
  while (i > 0) {
    var pos = 0; //每趟开始时,无记录交换
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        var tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
      }
    }
    i = pos; //为下一趟排序作准备
  }
  console.timeEnd('优化版冒泡排序耗时');
  return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort_2(arr));
/**
 * 思路：通过冒泡排序将最大(小)值放在数组的最末端，记录最后一次可以交换顺序的index值，这个值代表了这个index值到值.length直接的内容都已经排序完成不需要重复进行排序
 */
