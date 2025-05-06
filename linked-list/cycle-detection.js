
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Helper to create list with a cycle
function createLinkedListWithCycle() {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // cycle here

    return node1;
}

let cyclicNode = createLinkedListWithCycle()
 const detectLinkedListCycle =(cyclicNode)=>{
    /** initialize two pointer one slow and one fast */
    let slow = cyclicNode; // initial will be at the same position
    let fast =cyclicNode;

    while(fast != null && fast.next != null){
        slow = slow.next // move one
        fast= fast.next.next // move two step

        if(slow== fast){
            return true // cycle detected and return
        }
     }
     return false

}


console.log("the cyclic value is",detectLinkedListCycle(cyclicNode))
