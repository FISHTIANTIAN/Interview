const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

/**
 * 深度优先遍历口诀
 *  - 访问根节点
 *  - 对根节点的没访问过的相邻节点挨个进行深度优先遍历
 */
const DFSvisited = new Set()
const DFS = (n) => {
  console.log("深度优先遍历未访问过的节点:", n)
  DFSvisited.add(n)
  graph[n].forEach(item => {
    if (!DFSvisited.has(item)) DFS(item)
  });
}
DFS(2)

/**
 * 广度优先遍历口诀
 *  - 新建一个队列，把根节点入队
 *  - 把队头出队并访问
 *  - 把对头没访问过的相邻节点入队
 *  - 重复第二、三步直到队列为空
 */
const BFS = (graph) => {
  const BFSvisited = new Set()
  BFSvisited.add(2)
  const BFCstack = [2]
  while (BFCstack.length) {
    const _shift = BFCstack.shift()
    console.log("广度优先遍历未访问过的节点:", _shift)
    graph[_shift].forEach(item => {
      if (!BFSvisited.has(item)) {
        BFCstack.push(item)
        BFSvisited.add(item)
      }
    })
  }
}
BFS(graph)