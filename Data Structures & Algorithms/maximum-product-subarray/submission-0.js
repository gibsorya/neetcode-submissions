class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let result = nums[0]
        let curMin = 1, curMax = 1

        for (let num of nums) {
            const tmp = curMax * num;
            curMax = Math.max(num, Math.max(num * curMax, num * curMin))
            curMin = Math.min(num, Math.min(tmp, num * curMin))
            result = Math.max(result, curMax)
        }

        return result;
    }
}
