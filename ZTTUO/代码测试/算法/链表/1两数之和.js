var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        let key = target - nums[i];
        if (map.has(key)) {
            return [map.get(key), i]
        }
        map.set(nums[i], i)
    }
};

twoSum([2, 7, 11, 15], 9)