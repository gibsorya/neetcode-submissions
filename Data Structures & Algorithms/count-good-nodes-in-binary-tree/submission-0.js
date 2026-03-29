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
    goodNodes(root) {
        const dfs = (root, maxValue) => {
            if(!root) return 0

            if(root.val < maxValue) {
                return dfs(root.left, maxValue) + dfs(root.right, maxValue)
            } else {
                return 1 + dfs(root.left, root.val) + dfs(root.right, root.val)
            }
        }

        return dfs(root, root.val)
    }
}
