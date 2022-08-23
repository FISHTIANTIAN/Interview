var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i+=1) {
        const n = nums[i];
        const n2 = target - nums[i];
        if (map.has(n2)) {
            return [map.get(n2), i]
        }
        map.set(n, i)
    }
};


console.log(twoSum([2,7,11,15],9))