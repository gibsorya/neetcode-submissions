class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = []
        candidates.sort((a, b) => a - b)

        const dfs = (index, cur, total) => {

            if(total === target) {
                result.push([...cur])
                return
            }

            for(let j = index; j < candidates.length; j++) {
                if(j > index && candidates[j] === candidates[j - 1]) {
                    continue;
                }
                if(total + candidates[j] > target) {
                    break;
                }

                cur.push(candidates[j])
                dfs(j + 1, cur, total + candidates[j])
                cur.pop()
            }
        }

        dfs(0, [], 0)
        return result;
    }
}
