class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const stack = []
        /**
         * @param {number} left
         * @param {number} right
         * @param {string[]} stack
         * @return {void}
         */
        const backtrack = (left, right) => {
            if(right === s.length) {
                if(left === right) {
                    res.push([...stack])
                }
                return;
            }

            const currString = s.substring(left,right + 1);
            if(this.isPalindrome(currString)) {
                stack.push(currString)
                backtrack(right + 1, right + 1)
                stack.pop();
            } 
            
            backtrack(left, right + 1)
        }

        backtrack(0,0)
        return res;
    }

    /**
     * @param {string} s
     * @return {string[]}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;

        while(left < right) {
            if(s[left] != s[right]) return false;

            left++;
            right--;
        }

        return true
    }
}
