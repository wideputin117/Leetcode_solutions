// merging two sorted linked list


   
  class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeList(list1, list2){
    // we will have a dummy 
    const dummy = new ListNode(-1); // initially we have -1 in the dummy
    // create a current.next and pas dummy to it 
    let current = dummy; // current.next has access to value and next method of Listnode

    // implement while loop and traverse till one or both list are not null\

    while(list1 !== null && list2 !== null){
        // compare two find the smaller of both the list current.next node
        if(list1 <= list2){
            current.next = list1; // will give the list1 current.next node value to current.next 
            list1 = list1.next // will also update the list1 current.next node to next node;
        }else{
            current.next = list2;
            list2 = list2.next;
        }
        // after each addition to current.next we will point current.next node to the current.next.next
        current= current.next;
    }
    // there will be instance where both the list are of different size for those
    if(list1 !== null){
        current.next = list1;
    }
    if(list2 !== null){
        current.next =list2;
    }
    return dummy.next;
}// Example usage:
// Let's create two sorted linked lists
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the lists
const mergedList = mergeList(list1, list2);

// Function to print the list for demonstration
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val + " ");
        current = current.next;
    }
 
}

// Print the merged list
printList(mergedList); // Output should be: 1 2 3 4 5 6