class Solution {
private:
    vector<vector<int>> result;
public:
    vector<vector<int>> combinationSum(vector<int>& nums, int target) {
        vector<int> current;
        backtrack(nums, current, target, 0, 0);

        return result;
    }

    void backtrack(vector<int>& nums, vector<int>& current, int target, int index, int sum) {
        if(sum == target) {
            result.push_back(current);
            return;
        } else if (sum > target || index == nums.size()) {
            return;
        }

        current.push_back(nums[index]);
        sum += nums[index];
        backtrack(nums, current, target, index, sum);
        sum -= nums[index];
        current.pop_back();
        backtrack(nums, current, target, index + 1, sum);
    }
};
