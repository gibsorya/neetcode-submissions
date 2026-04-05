class NumMatrix {
    /**
     * @type {number[][]} prefixMatrix
     */
    
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;
        this.prefixMatrix = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0))
        for(let row = 0; row < ROWS; row++) {
            let prefix = 0;
            for(let col = 0; col < COLS; col++) {
                prefix += matrix[row][col];
                let above = this.prefixMatrix[row][col + 1]
                this.prefixMatrix[row + 1][col + 1] = prefix + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        let bottomRight = this.prefixMatrix[row2][col2];
        let topLeft = this.prefixMatrix[row1 - 1][col1 - 1];
        let top = this.prefixMatrix[row1 - 1][col2];
        let left = this.prefixMatrix[row2][col1 - 1];

        return bottomRight - top - left + topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
