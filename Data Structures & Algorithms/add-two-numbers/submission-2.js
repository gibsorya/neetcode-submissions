/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode()
        let cur = dummy
        let carry = 0
        while(l1 || l2 || carry) {
            let num1 = l1 && l1.val || 0
            let num2 = l2 && l2.val || 0

            let sum = num1 + num2 + carry
            carry = Math.floor(sum / 10)
            sum = sum % 10
            
            cur.next = new ListNode(sum)
            cur = cur.next

            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next :null
        }

        return dummy.next
    }
}
