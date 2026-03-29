class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        /** @type {number[][]} rows */
        let rows = new Array()
        rows.push([1])

        for(let r = 1; r < numRows; r++) {
            /** @type {number[]} */
            let row = new Array(r + 1).fill(0)
            row[0] = 1
            row[r] = 1
            let i = 1
            while(i < row.length - 1) {
                row[i] = rows[r - 1][i] + rows[r - 1][i - 1]
                i++
            }

            rows.push(row)
        }

        return rows;
    }
}
