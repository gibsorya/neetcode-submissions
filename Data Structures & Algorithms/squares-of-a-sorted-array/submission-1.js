class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let res = new Array(nums.length)

        let l = 0, r = nums.length - 1, resIndex = nums.length - 1

        while (l <= r) {
            let left_square = nums[l] * nums[l]
            let right_square = nums[r] * nums[r]

            if (left_square < right_square) {
                res[resIndex] = right_square
                r--;
            } else {
                res[resIndex] = left_square
                l++;
            }
            resIndex--;
        }

        return res
    }
}
