class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> sums = new HashMap<Integer,Integer>();

        for(int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if(sums.containsKey(diff)) {
                return new int[] {sums.get(diff), i};
            }
            sums.put(nums[i], i);
        }

        return new int[] {-1, -1};
    }
}
