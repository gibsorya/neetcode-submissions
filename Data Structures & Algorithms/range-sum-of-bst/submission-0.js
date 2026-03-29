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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        const dfs = (root, sum) => {
            if(!root) return 0

            sum = dfs(root.left, sum) + dfs(root.right, sum)

            if(root.val >= low && root.val <= high) {
                sum += root.val
            }

            return sum
        }

        return dfs(root, 0)
    }
}
