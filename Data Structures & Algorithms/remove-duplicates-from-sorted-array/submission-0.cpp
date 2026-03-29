class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        vector<int> unique;

        int prevNum = nums.at(0);
        unique.push_back(nums.at(0));

        for (int i = 1; i < nums.size(); i++) {
            if(nums.at(i) == prevNum) {
                continue;
            } else {
                unique.push_back(nums.at(i));
            }

            prevNum = nums.at(i);
        }

        nums = unique;

        cout << "SIZE: " << unique.size() << "\n";
        return unique.size();
    }
};