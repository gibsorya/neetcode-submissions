class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let counts = new Array(n + 1).fill(0)
        let offset = 1
        
        for(let i = 1; i<=n; i++) {
            if(offset * 2 == i) {
                offset = i;
            }
            counts[i] = 1 + counts[i - offset]
        }

        return counts
    }
}
