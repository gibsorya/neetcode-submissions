/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null
        let newGraph = new Map()
        let queue = []
        queue.push(node)
        newGraph.set(node, new Node(node.val))

        while(queue.length > 0) {
            let size = queue.length
            for(let i = 0; i < size; i++) {
                let curr = queue.shift()
                
                for(let neighbor of curr.neighbors) {
                    if(!newGraph.has(neighbor)) {
                        newGraph.set(neighbor, new Node(neighbor.val))
                        queue.push(neighbor)
                    }
                    newGraph.get(curr).neighbors.push(newGraph.get(neighbor))
                }
            }
        }

        return newGraph.get(node)
    }
}
