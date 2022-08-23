/**
 * 先序遍历口诀
 *  - 访问根节点
 *  - 对节点的左子树进行先序遍历
 *  - 对节点的右子树进行先序遍历
 */

const dataTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

// 递归版
const preorder_1 = (root) => {
  if (!root) return
  console.log("递归版:", root.val)
  preorder_1(root.left)
  preorder_1(root.right)
}
preorder_1(dataTree)

// 非递归版，使用栈的后入先出的特性实现
const preorder_2 = (root) => {
  if (!root) return
  let stack = [root]
  while (stack.length) {
    let _pop = stack.pop()
    console.log("非递归版:", _pop.val)
    if (_pop.right) stack.push(_pop.right)
    if (_pop.left) stack.push(_pop.left)
  }
}
preorder_2(dataTree)