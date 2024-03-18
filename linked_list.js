// implementing linked list in javascript

// this is a function to reverse a val 
let head= {
    val:1,
    next:{
        val: 2,
        next:{
            val:3,
            next:null
        }
    }
}

function linkedList(head){
    let prev = null;

    while(head){
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head= nextNode;
    }
    return prev;
}

//console.log(linkedList(head));

// bigger implementation of  linked list

// class for creating a node with value and pointer to next
class Node{
    constructor(value){
        this.value = value;
        this.next= null;
    }
}

class LinkedList{
 constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
 }
  // function method for adding value to node

  add(value){
    const newNode = new Node(value);

    if(!this.head){
        this.head = newNode;
        this.tail= newNode;
    }else{
        this.tail.next = newNode;
        this.tail = newNode
    }
    this.length++;


  }

   // Get element at a given index
   get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  // Remove element at a given index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let previousNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }
      const nodeToRemove = previousNode.next;
      previousNode.next = nodeToRemove.next;
      if (index === this.length - 1) {
        this.tail = previousNode;
      }
    }
    this.length--;
  }

  // Find element in the list
  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Reverse the list
  reverse() {
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    if (this.length > 1) {
      this.tail = this.head;
      while (this.tail.next) {
        this.tail = this.tail.next;
      }
    }
  }

  // Print elements of the list
  print() {
    let output = "";
    let currentNode = this.head;
    while (currentNode) {
      output += currentNode.value + " ";
      currentNode = currentNode.next;
    }
    console.log(output);
  }
}




// implementtaion

const myLinkedList = new LinkedList();

// Add elements
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);

// Get element at index
console.log(myLinkedList.get(1)); // 2

// Remove element at index
//myLinkedList.remove(1);

// Find element
console.log(myLinkedList.find(3)); // { value: 3, next: null }

// Reverse the list
myLinkedList.reverse();

// Print the list
myLinkedList.print(); // 3 1