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
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let val, closest = root.val

        while(root !== null) {
            val = root.val
            closest = Math.abs(val - target) < Math.abs(closest - target) || 
                (Math.abs(val - target) === Math.abs(closest - target) && val < closest) ? val : closest
            
            root = target < root.val ? root.left : root.right
        }

        return closest;
    }
}
