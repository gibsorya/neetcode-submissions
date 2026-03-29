class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::unordered_map<int, int> prevDiff;

        for(int i = 0; i < nums.size(); i++) {
            int diff = target - nums[i];

            if(prevDiff.count(diff)) {
                return {prevDiff[diff], i};
            }

            prevDiff.insert({nums[i], i});
        }
        return {};
    }
};
