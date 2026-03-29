class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        let ROWS = grid.length, COLS = grid[0].length
        let neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        let visited = new Set()
        let queue = []

        visited.add("0,0")
        queue.push([0, 0])

        let length = 0

        while(queue.length > 0) {
            let size = queue.length
            for(let i = 0; i < size; i++) {
                let [r, c] = queue.shift()

                if (r === ROWS - 1 && c === COLS - 1) {
                    return length;
                }

                for(let neighbor of neighbors) {
                    let [dr, dc] = neighbor

                    if(Math.min(r + dr, c + dc) < 0 ||
                        r + dr === ROWS ||
                        c + dc === COLS ||
                        visited.has(r + dr + ',' + (c + dc)) ||
                        grid[r + dr][c + dc] === 1
                    ) {
                        continue;
                    }
                    queue.push([r + dr, c + dc]);
                    visited.add(r + dr + ',' + (c + dc))
                }
            }

            length++
        }

        return -1;
    }
}
