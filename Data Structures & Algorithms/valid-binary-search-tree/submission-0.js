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
    isValidBST(root) {
        const dfs = (root, high, low) => {
            if(root === null) return true
            if((low != null && low.val >= root.val) || (high != null && high.val <= root.val)){
                return false;
            }

            return dfs(root.right, high, root) && dfs(root.left, root, low)
        }

        return dfs(root, null, null)
    }
}
