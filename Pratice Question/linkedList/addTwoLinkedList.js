/*
    2. Add Two Numbers

    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example 1: 
        Input: l1 = [2,4,3], l2 = [5,6,4]
        Output: [7,0,8]
        Explanation: 342 + 465 = 807.
    
    Example 2:
        Input: l1 = [0], l2 = [0]
        Output: [0]

    Example 3:
        Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        Output: [8,9,9,9,0,0,0,1]
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1Head = new ListNode(2)
const l1Node1 = new ListNode(4)
l1Head.next = l1Node1;
const l1Node2 = new ListNode(3)
l1Node1.next = l1Node2


const l2Head = new ListNode(5)
const l2Node1 = new ListNode(6)
l2Head.next = l2Node1;
const l2Node2 = new ListNode(3)
l2Node1.next = l2Node2

const traversal = (head) => {
    while(head != null) {
        console.log(head.val);
        head = head.next;
    }
}


var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while(l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode (sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

traversal(addTwoNumbers(l1Head, l2Head))



