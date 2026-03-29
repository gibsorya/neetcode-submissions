class Solution {
public:
    void sortColors(vector<int>& nums) {
        vector<int> counts(3);

        for(int& n : nums) {
            counts[n]++;
        }

        int i = 0;
        for(int val = 0; val < counts.size(); val++) {
            int count = counts[val];
            for(int j = 0; j < count; j++) {
                nums[i] = val;
                i++;
            }
        }
    }
};