class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let L = 0, R = nums.length - 1;

        while(L <= R) {
            let mid = Math.floor(L + (R - L)/2);

            if(nums[mid] === target) {
                return mid;
            } else if(nums[mid] < target) {
                L = mid + 1;
            } else {
                R = mid - 1;
            }
        }

        return L;
    }
}
