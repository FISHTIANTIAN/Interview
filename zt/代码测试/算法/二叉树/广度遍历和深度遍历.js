// 深度遍历
/**
 * 思路
 *  - 根节点
 *  - 左子树
 *  - 右子树
 *  先找到叶子节点再通过执行栈弹出到上个节点
 */
var maxDepth = function (root) {
  let deep = 0
  const preorder = (n, l) => {
    if (!n) return
    // if(!n.left && !n.right){deep = Math.max(deep, l)} // 内存低
    deep = Math.max(deep, l)
    preorder(n.left, l + 1)
    preorder(n.right, l + 1)
  }
  preorder(root, 1)
  return deep
};

// 广度遍历
/**
 * 思路
 *  - 根节点
 *  - 左子树
 *  - 右子树
 *  先找到根节点，然后通过访问根节点的左子树和右子树进入子节点的树
 */
var minDepth = function (root) {
  if (!root) return 0
  let stack = [[root, 1]]
  while (stack.length) {
    let [_shift, l] = stack.shift()
    if (!_shift.left && !_shift.right) return l
    if (_shift.left) stack.push([_shift.left, l + 1])
    if (_shift.right) stack.push([_shift.right, l + 1])
  }
};