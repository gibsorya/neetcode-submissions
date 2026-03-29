class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ''

        let encoded = ''
        for(let str of strs) {
            encoded += str.length + '#' + str;
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '') return []
        let result = []

        let i = 0;
        while(i < str.length) {
            let length = Number(str.substring(i, str.indexOf('#')))
            i = str.indexOf('#') + 1
            let s = str.substring(i, i + length)
            result.push(s)
            i = i + length;
            str = str.substring(i)
            i = 0;
        }

        return result;
    }
}
