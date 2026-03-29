class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = new Int32Array(n).fill(-1);
        
        function dfs(currPos) {
            if(currPos >= n) {
                return currPos == n
            }
            if(cache[currPos] != -1) return cache[currPos]
            
            return (cache[currPos] = dfs(currPos + 1) + dfs(currPos + 2))
        };

        return dfs(0)
    }
}
