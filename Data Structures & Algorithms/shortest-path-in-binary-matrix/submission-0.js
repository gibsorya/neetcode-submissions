class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if(grid[0][0] === 1 || grid.length === 0) return -1;
        let ROWS = grid.length, COLS = grid[0].length
        let queue = []
        let visited = new Set()

        queue.push([0,0])
        visited.add("0,0")

        let directions = [[0,1], [0,-1], [1,0], [-1,0], [1,-1], [-1,-1], [1,1], [1,-1]]

        let length = 1;

        while(queue.length > 0) {
            let size = queue.length

            for(let i = 0; i < size; i++) {
                let [r, c] = queue.shift()
                console.log(r, c)
                if(r === ROWS - 1 && c === COLS - 1) {
                    return length;
                }
                for(let dir of directions) {
                    let [dr, dc] = dir
                    if(Math.min(r + dr, c + dc) < 0 ||
                        dr + r === ROWS ||
                        dc + c === COLS ||
                        visited.has(dr + r + "," + (dc + c)) ||
                        grid[dr + r][dc + c] === 1
                    ) {
                        continue;
                    }
                    queue.push([dr + r, dc + c])
                    visited.add(dr + r + "," + (dc + c))
                }
            }
            length++;
            console.log("LENGTH", length, queue)
        }
        return -1;
    }
}
