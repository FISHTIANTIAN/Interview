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

const preoder = (root) => {
  if (!root) return
  console.log(root.val)
  preoder(root.left)
  preoder(root.right)
}

preoder(dataTree)