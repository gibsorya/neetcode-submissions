class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []
        

        const dfs = (perm, nums, track) => {
            if(perm.length === nums.length) {
                result.push([...perm])
                return
            }

            for(let i = 0; i < nums.length; i++) {
                if(!track[i]) {
                    perm.push(nums[i])
                    track[i] = true
                    dfs(perm, nums, track)
                    perm.pop()
                    track[i] = false
                }
            }
        }

        dfs([], nums, new Array(nums.length).fill(false))
        return result
    }
}
