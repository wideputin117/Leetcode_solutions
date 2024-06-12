class Node {
   constructor(data) {
       this.data = data;
       this.next = null;
   }
}

class LinkedList {
   constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
   }

   isEmpty() {
       return this.length === 0;
   }

   getSize() {
       return this.length;
   }

   getHead() {
       return this.head;
   }

   getTail() {
       return this.tail;
   }

   addFront(value) {
       let node = new Node(value);
       if (!this.head) {
           this.head = node;
       } else {
           node.next = this.head;
           this.head = node;
       }
       this.length++;
   }

   add(data) {
       const newNode = new Node(data);
       let current = this.head;
       if (!current) {
           this.head = newNode;
           this.tail = newNode;
       } else {
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       return this;
   }

   addToTail(data) {
       let newNode = new Node(data);
       if (this.head === null) {
           this.head = newNode;
           return;
       }
       let current = this.head;
       while (current.next !== null) {
           current = current.next;
       }
       current.next = newNode;
   }

   addAtPosition(data, position) {
       let newNode = new Node(data);
       if (position === 1) {
           newNode.next = this.head;
           this.head = newNode;
           return;
       }
       let current = this.head;
       let i = 1;
       while (i < position - 1 && current) {
           current = current.next;
           i++;
       }
       if (current) {
           newNode.next = current.next;
           current.next = newNode;
       }
   }

   printAll() {
       let current = this.head;
       while (current) {
           console.log(current.data);
           current = current.next;
       }
   }

   // Function to reverse the linked list in place
   reverse() {
       let prev = null;
       let current = this.head;
      console.log(current)
       while (current) {
        // console.log(current.next);
           let next = current.next;
           current.next = prev;
           prev = current;
           current = next;
       }

       // Swap head and tail after reversing
       [this.head, this.tail] = [prev, this.head];
       console.log(prev);
   }
}

const list = new LinkedList();
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.reverse()