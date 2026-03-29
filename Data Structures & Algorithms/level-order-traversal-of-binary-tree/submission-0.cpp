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
    vector<vector<int>> levels;
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        bfs(root);

        return levels;
    }

    void bfs(TreeNode* root) {
        if(!root) {
            return;
        }

        queue<TreeNode*> nodes;
        nodes.push(root);

        while(!nodes.empty()) {
            vector<int> level;
            int size = nodes.size();
            for(int i = 0; i < size; i++) {
                TreeNode* curr = nodes.front();
                level.push_back(curr->val);
                nodes.pop();
                if(curr->left) nodes.push(curr->left);
                if(curr->right) nodes.push(curr->right);
            }
            levels.push_back(level);
        }
    }
};
