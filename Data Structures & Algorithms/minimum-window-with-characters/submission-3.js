class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        /**
         * @type {Map<string, number>}
         */
        let tCount = new Map()
        let sCount = new Map()
        
        let result = ""
        
        for(let c = 0; c < t.length; c++) {
            tCount[t[c]] = (tCount[t[c]] || 0) + 1
        }

        let L = 0;
        let tValid = Object.keys(tCount).length;
        let sValid = 0;
        let res = [-1, -1]
        let resLength = Infinity;
        for(let R = 0; R < s.length; R++) {
            let c = s[R]
            sCount[c] = (sCount[c] || 0) + 1
            if(tCount[c] && sCount[c] === tCount[c]) {
                sValid++;
            }
            while(tValid === sValid) {
                if(R - L + 1 < resLength) {
                    resLength = R - L + 1;
                    res = [L, R]
                }
                sCount[s[L]]--;
                if(tCount[s[L]] && sCount[s[L]] < tCount[s[L]]) {
                    sValid--;
                }
                L++;
            }
        }

        return resLength === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
