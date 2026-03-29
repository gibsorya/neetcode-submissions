class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let L = 1, R = x

        while (L <= R) {
            
            let M = Math.floor(L + ((R - L) / 2))
            
            let square = M * M
            if(square === x) {
                return M
            } else if (square > x) {
                R = M - 1
            } else {
                L = M + 1
            }
        }

        return R
    }
}
