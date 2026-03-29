class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let lastPos = nums.length - 1;

        for(let i = nums.length - 1; i >= 0; i--) {
            if(nums[i] + i >= lastPos) {
                lastPos = i;
            }
        }

        return lastPos == 0
    }
}
