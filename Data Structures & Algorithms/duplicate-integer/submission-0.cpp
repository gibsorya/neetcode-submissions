class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        std::unordered_set<int> values;

        for (int num : nums) {
            if (values.count(num) == 1) {
                return true;
            }

            values.insert(num);
        }

        return false;
    }
};