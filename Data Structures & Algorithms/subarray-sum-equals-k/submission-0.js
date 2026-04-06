class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let prefixSums = new Map();
        prefixSums.set(0, 1);
        let currSum = 0;
        for(let num of nums) {
            currSum += num;
            let diff = currSum - k;
            count += prefixSums.get(diff) || 0
            prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1)
        }

        return count;
    }
}
