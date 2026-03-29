class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let curr_pos = nums.length - 1
        for (let i = nums.length - 1; i >= 0; i--) {
            if(nums[i] + i >= curr_pos) curr_pos = i
        }

        return curr_pos === 0
    }
}
