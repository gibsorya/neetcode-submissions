class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const n = nums.length;
        let prefixSums = new Array(n + 1).fill(0)

        for(let i = 0; i < n; i++) {
            prefixSums[i + 1] = prefixSums[i] + nums[i];
        }
        console.log(prefixSums)
        for(let i = 0; i < n; i++) {
            const leftSum = prefixSums[i]
            const rightSum = prefixSums[n] - prefixSums[i + 1]
            if(leftSum === rightSum) {
                return i;
            }
        }

        return -1;
    }
}
