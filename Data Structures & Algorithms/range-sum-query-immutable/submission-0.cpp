class NumArray {
private:
    vector<int> prefixSums;
public:
    NumArray(vector<int>& nums) {
        int sum = 0;
        for(const auto& num : nums) {
            sum += num;
            prefixSums.push_back(sum);
        }
    }
    
    int sumRange(int left, int right) {
        return prefixSums[right] - prefixSums[left - 1];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */