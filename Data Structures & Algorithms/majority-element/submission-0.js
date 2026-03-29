class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = nums[0]
        let count = 1;

        for(let num of nums) {
            if(num === candidate) {
                count += 1
            } else {
                count -= 1
                if (count === 0) {
                    candidate = num;
                    count = 1;
                }
            }
        }

        return candidate
    }
}
