/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int> res;
        if(!root) return res;

        queue<TreeNode*> nodes;
        nodes.push(root);

        while(!nodes.empty()) {
            TreeNode* rightSide = nullptr;
            int size = nodes.size();
            for(int i = 0; i < size; i++) {
                TreeNode* node = nodes.front();
                nodes.pop();
                if(node) {
                    rightSide = node;
                    nodes.push(node->left);
                    nodes.push(node->right);
                }
            }
            
            if(rightSide) {
                res.push_back(rightSide->val);
            }
        }

        return res;
    }
};
