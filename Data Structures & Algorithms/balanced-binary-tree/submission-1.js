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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root == null) return true
        return this.dfs(root, 0) >= 0
    }

    dfs(root, height) {
        if(root == null) return height

        let l = this.dfs(root.left, height + 1)
        let r = this.dfs(root.right, height + 1)
        
        if(l == -1 || r == -1 || Math.abs(l - r) > 1) return -1

        return Math.max(l, r)
    }
}
