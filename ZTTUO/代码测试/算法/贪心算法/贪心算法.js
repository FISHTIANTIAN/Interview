/**
 * 455. 分发饼干
 * 
 * 贪心算法
 *  - 贪心算法是算法设计中的一种方法
 *  - 期盼通过每个阶段的局部最优解，从而达到全局的最优
 *  - 结果并不一定是最优的
 */

var findContentChildren = function (g, s) {
  let _sort = function (a, b) {
    return a - b
  }
  g.sort(_sort)
  s.sort(_sort)
  let i = 0
  s.forEach((n) => {
    if (n >= g[i]) {
      i++
    }
  })
  return i
};