class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
         * @type {Map<string, number>}
         */
        let charCount = new Map()
        let result = 0;

        let L = 0, maxf = 0;

        for(let R = 0; R < s.length; R++) {
            charCount.set(s[R], (charCount.get(s[R]) || 0) + 1)
            maxf = Math.max(maxf, charCount.get(s[R]));

            while(R - L + 1 - maxf > k) {
                charCount.set(s[L], charCount.get(s[L]) - 1)
                L++
            }
            result = Math.max(result, R - L + 1)
        }

        return result
    }
}
