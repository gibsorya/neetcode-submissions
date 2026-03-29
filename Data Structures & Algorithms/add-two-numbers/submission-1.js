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
        let carry = 0
        let res = l1
        while(l1 !== null && l2 !== null) {
            let num1 = l1 && l1.val || 0
            let num2 = l2 && l2.val || 0
            let sum = num1 + num2 + carry
            if (sum >= 10) {
                carry = 1
                l1.val = sum % 10
            } else {
                l1.val = sum
                carry = 0
            }

            if (carry > 0 && (l1.next === null || l2.next === null)) {
                if(l1.next == null) l1.next = new ListNode(0)
                if(l2.next == null) l2.next = new ListNode(0)
            } else if((l1.next !== null && l2.next === null) || (l1.next === null && l2.next !== null)) {
                if(l1.next == null) l1.next = new ListNode(0)
                if(l2.next == null) l2.next = new ListNode(0)
            }
            l1 = l1.next
            l2 = l2.next
        }

        return res
    }
}
