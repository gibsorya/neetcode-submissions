class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++) {
            let j = target - nums[i] // 7 - 4 = 3

            if(map.has(j)) { // 4
                return [map.get(j), i]
            }

            map.set(nums[i], i) // set map[4] = 0
        }

        return []
    }
}
