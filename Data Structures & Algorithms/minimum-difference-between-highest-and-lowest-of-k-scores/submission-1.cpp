class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());


        int minDiff = INT_MAX;
        int L = 0;

        for(int R = k - 1; R < nums.size(); R++) {
            minDiff = min(minDiff, nums[R] - nums[L]);
            L++;
        }

        return minDiff;
    }
};