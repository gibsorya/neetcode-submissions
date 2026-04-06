class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let index = -1;

        let prefixSums = new Array(nums.length + 2).fill(0)
        let suffixSums = new Array(nums.length + 2).fill(0)

        for(let i = 0; i < nums.length; i++) {
            prefixSums[i + 1] = prefixSums[i] + nums[i];
        }
        
        for(let i = nums.length - 1; i >= 0; i--) {
            suffixSums[i] = suffixSums[i + 1] + nums[i]
            if(suffixSums[i + 1] === prefixSums[i]) {
                index = i;
            }
        }

        return index;
    }
}
