class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let ROWS = grid.length, COLS = grid[0].length
        let cache = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));
        /**
         * @param {number} r
         * @param {number} c
         * @return {number}
         */
        const dfs = (r, c) => {
            if (r == ROWS || c == COLS) return 0
            if (grid[r][c] == 1) return 0
            if (cache[r][c] > -1) return cache[r][c]
            if (r == (ROWS - 1) && c == (COLS - 1)) return 1

            
            let path = dfs(r + 1, c)
            path += dfs(r, c + 1)
            cache[r][c] = path
            return cache[r][c]
        }

        return dfs(0, 0)
    }
}
