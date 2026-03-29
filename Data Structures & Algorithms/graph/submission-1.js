class Graph {

    constructor() {
        /**
         * @type {Map<number, number[]>}
         */
        this.list = new Map()
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if(!this.list.has(dst)) this.list.set(dst, [])
        if(!this.list.has(src)) this.list.set(src, [dst])
        
        if(!this.list.get(src).includes(dst)) this.list.get(src).push(dst)
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if(!this.list.has(dst) || !this.list.has(src)) return false
        if(this.list.has(src) && !this.list.get(src).includes(dst)) return false
        this.list.get(src).splice(this.list.get(src).indexOf(dst), 1)
        return true
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        let queue = []
        let visited = new Set()

        queue.push(src)
        visited.add(src)

        while(queue.length > 0) {
            let size = queue.length
            for(let i = 0; i < size; i++) {
                let node = queue.shift()
                if(node === dst) {
                    return true
                }

                for(let neighbor of this.list.get(node)) {
                    queue.push(neighbor)
                    visited.add(neighbor)
                }
            }
        }
        
        return false
    }
}
