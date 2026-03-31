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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = head.next

        while(fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        let l2 = slow.next;
        let prev = (slow.next = null);
        while(l2 !== null) {
            let tmp = l2.next;
            l2.next = prev;
            prev = l2;
            l2 = tmp;
        }

        let l1 = head;
        l2 = prev;
        while(l2 !== null) {
            let tmp1 = l1.next;
            let tmp2 = l2.next;
            l1.next = l2;
            l2.next = tmp1;
            l1 = tmp1;
            l2 = tmp2;
        }
    }
}
