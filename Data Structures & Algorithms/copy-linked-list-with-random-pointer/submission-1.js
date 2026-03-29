// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let nodes = new Map()
        nodes.set(null, null)

        let curr = head
        while(curr !== null) {
            if(!nodes.has(curr)) nodes.set(curr, new Node(0))
            nodes.get(curr).val = curr.val

            if(!nodes.has(curr.next)) {
                nodes.set(curr.next, new Node(0))
            }
            nodes.get(curr).next = nodes.get(curr.next)

            if(!nodes.has(curr.random)) {
                nodes.set(curr.random, new Node(0))
            }
            nodes.get(curr).random = nodes.get(curr.random)
            
            curr = curr.next
        }

        return nodes.get(head)
    }
}
