/*
    21. Merge Two Sorted Lists

    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists in a one sorted list. 
    The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node at the end of the linked list
    append(data) {
        const newNode = new ListNode(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Function to add a new node at the beginning of the linked list
    prepend(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Function to remove the first node with a specific data value
    remove(data) {
        if (!this.head) {
            return;
        }

        if (this.head.val === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.val === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Function to display the linked list in an array
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

// const l1 = new LinkedList();
// const l2 = new LinkedList();

// l1.append(1);
// l1.append(2);
// l1.append(4);

// l2.append(1);
// l2.append(3);
// l2.append(4);

// var getValueOfList = function (list1) {
//     const head = list1;
//     console.log(head.val);

// }

// console.log(getValueOfList(l1));
const l1 = new LinkedList();
const l2 = new LinkedList();

l1.append(1);
l1.append(2);
l1.append(4);

l2.append(1);
l2.append(3);
l2.append(4);

var mergeTwoLists = function(list1, list2) {
    let head1 = list1.head;
    let head2 = list2.head;
    let newHead = new ListNode(0);

    while (head1 || head2) {
        if (head1.val > head2.val) {
            newHead.next = head2.val;
            newHead = newHead.next;
            head2 = head2.next;
        } else {
            newHead.next = head1.val;
            newHead = newHead.next;
            head1 = head1.next;
        }
    }
};

mergeTwoLists(l1, l2)
