class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let res = []

        let l = 0, r = nums.length - 1

        while (l <= r) {
            let left_square = nums[l] * nums[l]
            let right_square = nums[r] * nums[r]

            if (left_square < right_square) {
                res.unshift(right_square)
                r--;
            } else {
                res.unshift(left_square)
                l++;
            }
        }

        return res
    }
}
