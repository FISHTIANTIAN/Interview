/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)]
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3]))