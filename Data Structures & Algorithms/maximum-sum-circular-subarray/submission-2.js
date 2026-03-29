class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globMax = nums[0]
        let globMin = nums[0]
        let currMax = 0
        let currMin = 0
        let total = 0
        for(let num of nums) {
            currMax = Math.max(currMax + num, num)
            currMin = Math.min(currMin + num, num)
            total += num
            globMax = Math.max(globMax, currMax)
            globMin = Math.min(globMin, currMin)
        }

        return globMax > 0 ? Math.max(globMax, total - globMin) : globMax
    }
}
