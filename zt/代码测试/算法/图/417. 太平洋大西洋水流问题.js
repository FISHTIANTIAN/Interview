/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 
 * 解题思路
 *  新建两个矩阵，分别记录能流到两个大洋的坐标
 *  从四面海岸线，多管齐下，同时深度遍历图，并进行矩阵填充
 *  遍历两个矩阵，找到同个坐标下都为true的进行坐标收集，并输出
 */
var pacificAtlantic = function (matrix) {
  if (!matrix && !matrix[0]) return [];
  const m = matrix.length;// 矩阵行
  const n = matrix[0].length; // 矩阵列
  // 创建两个矩阵
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false)); // 太平洋
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false)); // 大西洋
  // 创建深度遍历方法
  const DFS = (r, c, flow) => {
    flow[r][c] = true;
    [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
      if (
        // 保证在矩阵中
        nr >= 0 && nr < m &&
        nc >= 0 && nc < n &&
        // 防止死循环
        !flow[nr][nc] &&
        // 保证从海岸线逆流而上
        matrix[nr][nc] >= matrix[r][c]
      ) {
        DFS(nr, nc, flow);
      }
    })
  }

  // 四面海岸线，多管齐下
  for (let r = 0; r < m; r++) {
    DFS(r, 0, flow1);
    DFS(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c++) {
    DFS(0, c, flow1);
    DFS(m - 1, c, flow2);
  }

  // 收集太平洋和大西洋同个坐标都为true的数据
  let outRes = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        outRes.push([r, c]);
      }
    }
  }
  return outRes
};

console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]))

// 创建一个空矩阵( 值全部为false )
const matrix = Array.from({ length: 9 }, () => new Array(9).fill(false))
// console.log("空矩阵:", matrix)