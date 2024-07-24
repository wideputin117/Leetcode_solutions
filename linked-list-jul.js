 /**
  * Implementing a Linked List using Node
  * 1. First step is to create a class for creating Nodes
  */

 /**
  * Traversal in a Linked List
  * Step-by-step approach:

                                Initialize a pointer current to the head of the list.
                                Use a while loop to iterate through the list until the current pointer reaches NULL.
                                Inside the loop, print the data of the current node and move the current pointer to the next node.
  */

 // Node Class Driver
 class Node {
    constructor(data){
        this.data = data;
        this.next= null; // for initial the next is not pointing anywhere else that is why it is given null
    }
 }

 // function code