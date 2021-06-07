/**
 * @param {*} root 
 * @returns 
 * 101. 对称二叉树
 * 
 * 分治：是算法设计方法(思想) 分 + 解 + 合
 *      将一个问题分为多个*和原问题相似的*小问题，递归小问题，再将结合并来解决原来的问题
 * 应用场景：
 *  - 并归排序
 *  - 快速排序
 *  - 二分搜索
 *  - 翻转二叉树
 *  - ......
 */
var isSymmetric = function (root) {
  if (!root) { return true }
  const isMirror = (l, r) => {
    if (!l && !r) { return true }
    if (l && r && l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true
    }
    return false
  }
  return isMirror(root.left, root.right)
};