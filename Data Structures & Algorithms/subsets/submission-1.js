class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subsets = []

        const backtrack = (i, sub) => {
            if(i >= nums.length) {
                subsets.push([...sub])
                return;
            }

            sub.push(nums[i])
            backtrack(i + 1, sub)
            sub.pop()
            backtrack(i + 1, sub)
        }

        backtrack(0, [])

        return subsets;
    }
}
