class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if(matrix.length === 0) return false
        let rows = matrix.length
        let cols = matrix[0].length
        let left = 0, right = (rows * cols) - 1

        while(left <= right) {
            let mid = Math.floor(left + (right - left) / 2)
            let curr = matrix[Math.floor(mid / cols)][mid % cols]

            if(curr === target) return true

            if(curr > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return false
    }
}
