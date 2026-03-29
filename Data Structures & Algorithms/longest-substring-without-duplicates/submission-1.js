class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /**
         * @type {Set<string>}
         */
        let substring = new Set();
        let L = 0;
        let length = 0;

        for(let R = L; R < s.length; R++) {
            while(substring.has(s[R])) {
                substring.delete(s[L])
                L++;
            }
            substring.add(s[R])
            length = Math.max(length, R - L + 1)
        }

        return length
    }
}
