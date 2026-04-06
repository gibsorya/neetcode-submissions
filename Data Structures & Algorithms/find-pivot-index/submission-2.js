class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const n = nums.length;
        // let prefixSums = new Array(n + 1).fill(0)
        let total = 0;
        for(let i = 0; i < n; i++) {
            total += nums[i];
        }

        let leftSum = 0;
        for(let i = 0; i < n; i++) {
            const rightSum = total - leftSum - nums[i]
            if(leftSum === rightSum) {
                return i;
            }
            leftSum += nums[i]
        }

        return -1;
    }
}
