class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length, COLS = board[0].length;
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];
        const visited = new Set()
        const dfs = (row, col, i) => {
            const cell = `${row},${col}`
            if(row >= ROWS || col >= COLS || 
                col < 0 || row < 0 || visited.has(cell) ||
                board[row][col] !== word[i]
            ){
                return false;
            }
            if(i === (word.length - 1)) {
                return true;
            }

            visited.add(cell);
            for(let dir of directions) {
                let [r, c] = dir;
                let res = dfs(row + r, col + c, i + 1)
                if(res) return true;
            }
            visited.delete(cell);
            return false;
        }

        for(let row = 0; row < ROWS; row++) {
            for(let col = 0; col < COLS; col++) {
                if(dfs(row, col, 0)) return true;
            }
        }

        return false;
    }
}
