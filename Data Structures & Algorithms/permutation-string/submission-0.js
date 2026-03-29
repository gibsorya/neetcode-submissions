class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false

        let s1Counts = new Array(26).fill(0)
        let s2Counts = new Array(26).fill(0)

        for(let c = 0; c < s1.length; c++) {
            s1Counts[s1.charCodeAt(c) - 97] += 1
            s2Counts[s2.charCodeAt(c) - 97] += 1
        }

        let counts = 0
        for(let i = 0; i < 26; i++) {
            if(s1Counts[i] === s2Counts[i]) {
                counts++;
            }
        }

        let l = 0
        for(let r = s1.length; r < s2.length; r++) {
            if(counts === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            s2Counts[index]++;

            if(s1Counts[index] === s2Counts[index]) {
                counts++;
            } else if(s1Counts[index] + 1 === s2Counts[index]) {
                counts--;
            }

            index = s2.charCodeAt(l) - 97;
            s2Counts[index]--;
            if(s1Counts[index] === s2Counts[index]) {
                counts++;
            } else if(s1Counts[index] - 1 === s2Counts[index]) {
                counts--;
            }
            l++;
        }

        return counts === 26
    }
}
