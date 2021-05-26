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

const preoder = (root) => {
  if (!root) return
  preoder(root.left)
  preoder(root.right)
  console.log(root.val)
}

preoder(dataTree)