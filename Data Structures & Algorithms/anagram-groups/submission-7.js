class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = new Map()
        
        for(let str of strs) {
            let counts = new Array(26).fill(0)
            
            for(let i = 0; i < str.length; i++) {
                counts[str.charCodeAt(i) - 96]++
            }
            const key = counts.join(',')
            if(!anagrams.has(key)) {
                anagrams.set(key, [])
            }
            anagrams.get(key).push(str)
        }


        return anagrams.values().toArray()
    }
}
