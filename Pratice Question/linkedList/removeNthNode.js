/*
    19. Remove Nth Node From End of List

    Given the head of a linked list, remove the nth node from the end of the list and return its head.

    Example 1 :
        Input: head = [1,2,3,4,5], n = 2
        Output: [1,2,3,5]

    Example 2:
        Input: head = [1], n = 1
        Output: []

    Example 3:
        Input: head = [1,2], n = 1
        Output: [1]
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const traversal = (head) => {
    while(head != null) {
        console.log(head.val);
        head = head.next;
    }
}

const l1Head = new ListNode(1)
const l1Node1 = new ListNode(2)
l1Head.next = l1Node1;
const l1Node2 = new ListNode(3)
l1Node1.next = l1Node2
const l1Node3 = new ListNode(4)
l1Node2.next = l1Node3
const l1Node4 = new ListNode(5)
l1Node3.next = l1Node4

var removeNthFromEnd = function(head, n) {
    let length = 0;
   let postion = 0;
   let current = head;
   let previous = head;
   while (current) {
       length++;
       current = current.next;
   }

   if (length == 1 || length == 0) {
       return head = null
   };

   postion = length - n;
   if (postion == 0) {
       head = previous.next;
       previous = null;
       return head;
   }
   current = head.next;
   length = 1;
   while (postion > length) {
       previous = previous.next;
       current = current.next;
       length++;
   }
   previous.next = current.next;
   current = null;
   
   return head
};

const n = 3;
traversal(removeNthFromEnd(l1Head, n));