/**
 * 后序遍历口诀
 *  - 对节点的左子树进行后序遍历
 *  - 对节点的右子树进行后序遍历
 *  - 访问根节点
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
const postorder_1 = (root) => {
  if (!root) return
  postorder_1(root.left)
  postorder_1(root.right)
  console.log("递归版:", root.val)
}
postorder_1(dataTree)

// 非递归版，使用栈的后入先出特性实现
const postorder_2 = (root) => {
  if (!root) return
  let stack = [root]
  let outPutStack = []
  while (stack.length) {
    let _pop = stack.pop()
    outPutStack.push(_pop)
    if (_pop.left) stack.push(_pop.left)
    if (_pop.right) stack.push(_pop.right)
  }
  while (outPutStack.length) {
    let _outPop = outPutStack.pop()
    console.log("非递归版:", _outPop.val)
  }
}
postorder_2(dataTree)