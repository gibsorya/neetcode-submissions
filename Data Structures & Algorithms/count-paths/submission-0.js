class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let prev_row = new Array(n).fill(0)

        for(let r = m - 1; r >= 0; r--) {
            let curr_row = new Array(n).fill(0)
            curr_row[n - 1] = 1

            for(let c = n - 2; c >= 0; c--) {
                curr_row[c] = curr_row[c + 1] + prev_row[c]
            }

            prev_row = curr_row
            console.log("PREV:", prev_row)
        }

        return prev_row[0]
    }
}
