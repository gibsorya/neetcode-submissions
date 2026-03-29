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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let result = 0
        const dfs = (root) => {
            if (root == null) return 0

            let left_length = dfs(root.left, result)
            let right_length = dfs(root.right, result)
            result = Math.max(result, left_length + right_length)
            return 1 + Math.max(left_length, right_length)
        }
        dfs(root)
        return result
    }


}
