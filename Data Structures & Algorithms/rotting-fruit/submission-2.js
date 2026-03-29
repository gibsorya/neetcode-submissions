class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = []
        let ROWS = grid.length, COLS = grid[0].length
        let fresh = 0
        let time = 0
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] === 1) {
                    fresh++
                } else if(grid[i][j] === 2) {
                    queue.push([i,j])
                }
            }
        }

        while(queue.length > 0 && fresh > 0) {
            let size = queue.length
            for(let i = 0; i < size; i++) {
                let [r, c] = queue.shift();

                for(let dir of directions) {
                    let [dr, dc] = dir

                    if(Math.min(r + dr, c + dc) < 0 ||
                        r + dr === ROWS ||
                        c + dc === COLS ||
                        grid[r + dr][c + dc] === 2 ||
                        grid[r + dr][c + dc] === 0
                    ) {
                        continue;
                    }

                    grid[r + dr][c + dc] = 2
                    fresh--;
                    queue.push([r + dr, c + dc])
                }
            }
            time++;
        }

        return fresh === 0 ? time : -1 
    }
}
