class Solution {
private:
    vector<vector<int>> result;
public:
    vector<vector<int>> combinationSum(vector<int>& nums, int target) {
        vector<int> current;
        backtrack(nums, current, target, 0);

        return result;
    }

    void backtrack(vector<int>& nums, vector<int>& current, int target, int index) {
        if(target == 0) {
            result.push_back(current);
            return;
        } else if (target < 0 || index == nums.size()) {
            return;
        }

        current.push_back(nums[index]);
        backtrack(nums, current, target - nums[index], index);
        current.pop_back();
        backtrack(nums, current, target, index + 1);
    }
};
