class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)
        let subsets = []
        const backtrack = (i, sub) => {
            subsets.push([...sub])
            for(let j = i; j < nums.length; j++) {
                if(j > i && nums[j] === nums[j - 1]) {
                    continue;
                }
                sub.push(nums[j])
                backtrack(j + 1, sub)
                sub.pop()
            } 
        }

        backtrack(0, [])

        return subsets
    }
}
