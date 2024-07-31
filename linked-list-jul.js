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

 // class to hold the functionality and other operations
 
 class LinkedList{
    constructor(){
        // this class will keep a look at head and size of list;
        this.head= null;
        this.size = 0;
    }
    // function to add a newNode to the list
    add(data){
      let newNode = new Node(data);
      // first case
      if(this.head === null){
        this.head = newNode;
      }else{
        let currentNode = this.head;
        while(currentNode.next){ // while the next is pointing to some element in the list we will update currentNode to currentNode.next
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
      this.size++;
    }
    /**  function to get a Node at index */
    getData(index){
        if(index < 0 || index> this.size-1){
            return undefined;
        }else{
            let currentNode = this.head;
            for(let i=0;i < index; i++){
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }
    /**
     * 
     */

 }

  