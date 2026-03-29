class TimeMap {
    constructor() {
        /** @type {Map<string, {value: string, timestamp: number}[]} */
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) this.keyStore.set(key, [])
        this.keyStore.get(key).push({value, timestamp})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return ""
        let result = ""
        let values = this.keyStore.get(key)
        let L = 0, R = values.length - 1;

        while (L <= R) {
            let mid = Math.floor(L + (R - L) + 1 / 2)
            let value = values[mid].value
            let curr_timestamp = values[mid].timestamp
            if(curr_timestamp === timestamp) {
                result = value;
                break;
            }
            if(curr_timestamp > timestamp) {
                R = mid - 1;
            } else {
                L = mid + 1;
                result = value;
            }
        }
        return result
    }
}

 
