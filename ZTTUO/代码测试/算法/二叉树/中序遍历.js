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

const inorder = (root) => {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

inorder(dataTree)