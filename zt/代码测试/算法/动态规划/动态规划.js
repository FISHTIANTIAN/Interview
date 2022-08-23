/**
 * 70. 爬楼梯
 * 
 * 动态规划
 *  - 动态规划是*算法设计*中的一种方法
 *  - 他将一个问题分解为*相互重叠*的子问题，通过反复求解子问题，来解决原来的问题
 * 
 * 代表例子：斐波那契数列( F(n) = F(n-1) + F(n-2) )
 */

var climbStairs = function (n) {
  if (n < 2) return 1
  let dp1 = 1;
  let dp2 = 2;
  for (let i = 3; i <= n; i++) {
    let temp = dp1;
    dp1 = dp2;
    dp2 = dp2 + temp
  }
  return dp2
};