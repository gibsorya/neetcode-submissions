class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []
        const backtrack = (open, closed, stack) => {
            if(open === closed && open === n) {
                res.push(stack);
                return;
            }

            if(open < n) {
                backtrack(open + 1, closed, stack + '(')
            }
            if(closed < open) {
                backtrack(open, closed + 1, stack + ')')
            }
        }

        backtrack(0, 0, "")

        return res;
    }
}
