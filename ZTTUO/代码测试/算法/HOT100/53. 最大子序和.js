/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let res = 0
  while (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      res += nums[i]
      if (max <= res) {
        max = res
      }
    }
    nums.shift()
    res = 0
  }
  return max
};


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))