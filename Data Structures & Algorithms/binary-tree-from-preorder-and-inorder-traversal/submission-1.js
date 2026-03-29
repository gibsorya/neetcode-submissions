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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorder_pos = new Map()
        for(let i = 0; i < inorder.length; i++) {
            inorder_pos.set(inorder[i], i)
        }

        let index = 0
        const dfs = (l, r) => {
            if(l > r) return null
            let node_val = preorder[index++]
            let node = new TreeNode(node_val)
            let mid = inorder_pos.get(node_val)
            node.left = dfs(l, mid - 1)
            node.right = dfs(mid + 1, r)
            return node
        }
        return dfs(0, inorder.length - 1)
    }
}
