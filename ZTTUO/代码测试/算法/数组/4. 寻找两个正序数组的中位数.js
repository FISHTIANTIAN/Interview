/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2).sort(compare)
  console.log(nums)
  if (nums.length % 2 == 1) {
    return nums[parseInt(nums.length / 2)].toFixed(5)
  } else {
    return ((nums[parseInt(nums.length / 2)] + nums[parseInt(nums.length / 2) - 1]) / 2).toFixed(5)
  }
};

function compare(value1, value2) {
  if (value1 > value2) {
    return 1;
  } else if (value1 < value2) {
    return -1;
  } else {
    return 0;
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]))
