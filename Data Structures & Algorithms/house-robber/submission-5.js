class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /** @type {number[]} paths */
        if (nums.length <= 1) return nums[0] || 0
        let paths = [0, 0]

        let i = 0
        while (i < nums.length) {
            let tmp = Math.max(nums[i] + paths[0], paths[1])
            paths[0] = paths[1]
            paths[1] = tmp

            i++
        }

        return paths[1]

        // const memo = new Int32Array(nums.length).fill(-1)

        // const dfs = (index) => {
        //     if (index >= nums.length) return 0

        //     if (memo[index] != -1) return memo[index]

        //     return (memo[index] = Math.max(nums[index] + dfs(index + 2), dfs(index + 1)))
        // }

        // // console.log(paths[0], paths[1])
        // // return Math.max(paths[0], paths[1])
        // return dfs(0)
    }
}
