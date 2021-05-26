/**
 * 中序遍历口诀
 *  - 对根节点左子树进行中序遍历
 *  - 访问根节点
 *  - 对根节点右子树进行中序遍历
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
const inorder_1 = (root) => {
  if (!root) return
  inorder_1(root.left)
  console.log("递归版:", root.val)
  inorder_1(root.right)
}
inorder_1(dataTree)

// 非递归版，使用栈的后入先出特性实现
const inorder_2 = (root) => {
  if (!root) return
  let stack = [root]
  let _node = root.left
  while (stack.length || _node) {
    while (_node) {
      stack.push(_node)
      _node = _node.left
    }
    let _pop = stack.pop()
    console.log("非递归版:", _pop.val)
    _node = _pop.right
  }
}
inorder_2(dataTree)