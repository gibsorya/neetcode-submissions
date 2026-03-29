class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let result = Infinity;
        let sum = 0;
        let L = 0;

        for(let R = 0; R < nums.length; R++) {
            sum += nums[R]
            while(sum >= target) {
                result = Math.min(result, R - L + 1)
                sum -= nums[L];
                L++;
            }
        }
        return result === Infinity ? 0 : result;
    }
}
