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

            if(map.has(target - j)) { // 4
                return [map.get(target - j), i]
            }

            map.set(j, i) // set map[4] = 0
        }

        return []
    }
}
