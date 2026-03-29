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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {

        const dfs = (root1, root2) => {
            if(!root1 && !root2) {
                return null
            } else if(!root1 || !root2) {
                return root1 || root2;
            }

            let node = new TreeNode(root1.val + root2.val)

            node.val = root1.val + root2.val
            node.left = dfs(root1.left, root2.left)
            node.right = dfs(root1.right, root2.right)

            return node;
        }

        return dfs(root1, root2)
    }
}
