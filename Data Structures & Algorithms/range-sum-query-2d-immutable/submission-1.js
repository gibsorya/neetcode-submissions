class NumMatrix {
    /**
     * @type {number[][]} prefixMatrix
     */
    
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let ROWS = matrix.length + 1;
        let COLS = matrix[0].length + 1;
        this.prefixMatrix = Array.from({ length: ROWS }, () => Array(COLS).fill(0))
        for(let row = 1; row < ROWS; row++) {
            let prefix = 0;
            for(let col = 1; col < COLS; col++) {
                prefix += matrix[row - 1][col - 1];
                let above = this.prefixMatrix[row - 1][col]
                this.prefixMatrix[row][col] = prefix + above;
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
