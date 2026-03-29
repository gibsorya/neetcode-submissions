class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if(text1.length > text2.length) {
            let temp = text2
            text2 = text1
            text1 = temp
        }

        let curr = new Array(text1.length + 1).fill(0)
        let prev = new Array(text1.length + 1).fill(0)

        for(let col = text2.length - 1; col >= 0; col--) {
            for(let row = text1.length - 1; row >= 0; row--) {
                if(text1[row] == text2[col]) {
                    curr[row] = 1 + prev[row + 1]
                } else {
                    curr[row] = Math.max(prev[row], curr[row + 1])
                }
            }

            [prev, curr] = [curr, prev]
        }

        return prev[0]
    }

    
}
