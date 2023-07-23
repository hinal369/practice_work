/*
    21. Merge Two Sorted Lists

    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists in a one sorted list. 
    The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.
*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1Head = new ListNode(-9)
const l1Node1 = new ListNode(3)
l1Head.next = l1Node1;
// const l1Node2 = new ListNode(3)
// l1Node1.next = l1Node2


const l2Head = new ListNode(5)
const l2Node1 = new ListNode(7)
l2Head.next = l2Node1;
// const l2Node2 = new ListNode(4)
// l2Node1.next = l2Node2

const l3 = l2Head;
const traversal = (head) => {
    while(head != null) {
        console.log(head.val);
        head = head.next;
    }
}

var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            list2 = list2.next
        } 
        current = current.next
    }

    current.next = list1 || list2;
    return dummyHead.next;
};

traversal(mergeTwoLists(l1Head, l2Head));