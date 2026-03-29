/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        let res = []

        const dfs = (node) => {
            if(!node) return;

            for(let child of node.children) {
                dfs(child)
            }
            res.push(node.val)
        }

        dfs(root)
        return res
    }
}
