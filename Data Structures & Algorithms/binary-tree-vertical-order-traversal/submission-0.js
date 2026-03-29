/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    verticalOrder(root) {
        if(!root) return []
        const map = new Map()
        let minCol = 0, maxCol = 0

        const dfs = (root, row, col) => {
            if(!root) return;
            if(!map.has(col)) map.set(col, [])
            map.get(col).push([row, root.val])
            minCol = Math.min(col, minCol)
            maxCol = Math.max(col, maxCol)

            dfs(root.left, row + 1, col - 1)
            dfs(root.right, row + 1, col + 1)
        }

        dfs(root, 0, 0)
        const res = []

        for(let c = minCol; c <= maxCol; c++) {
            let entries = map.get(c) || []
            entries.sort((a, b) => a[0] - b[0])
            res.push(entries.map(([_, val]) => val))
        }

        return res;
    }
}
