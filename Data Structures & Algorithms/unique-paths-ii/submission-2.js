class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let ROWS = grid.length, COLS = grid[0].length
        if(grid[0][0] == 1 || grid[ROWS - 1][COLS - 1] == 1) return 0 

        for(let r = ROWS - 1; r >= 0; r--) {
            // grid[r][COLS - 1] = 1
            for(let c = COLS - 1; c >= 0; c--) {
                if(grid[r][c] == 1) {
                    grid[r][c] = 0
                    continue
                }
                if(c == COLS - 1) {
                    grid[r][c] = grid[r + 1]?.[c] ?? 1
                    continue
                }

                let prev_row = grid[r + 1]?.[c] ?? 0
                grid[r][c] = grid[r][c + 1] + prev_row
            }
        }

        return grid[0][0]
        // let cache = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));
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

        // return dfs(0, 0)
    }
}
