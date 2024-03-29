// practicing linked list

// Node class is a single node in the linked list where value is the value of the node and next is the pointer that is pointing to the next node in the list

class Node{
    constructor(value){
        this.value = value;
        this.next =  null;
    }
}

// second class will be of linked list which will handle all the operations that can be done in an linked list

// in this class we have head which is the first node in the list and tail is the last in the list and length is the length of list to keep track of length of the list
class LinkedList{
    constructor(){
        this.head =  null;
        this.tail = null;
        this.length = 0;
    }

    // first method is to add add an element
    add(value){
        let newNode = new Node(value);
        // will check if theres any head in the list if there is no head will asssign the newNode to head as well as the tail
        if(!this.head){
           this.head = newNode;
           this.tail = newNode;
        }
        // other wise will point the next of the tail to newNode and tail will now hold the newNode
       
       else { 
        this.tail.next = newNode;
        this.tail = newNode;
       }
       // with each addition we will increase the length by 1 and will return the nodes in this class scope
       this.length++;
       return this;
    }
   
    // for adding the newnode in the end
    addToTail(value){
        let newNode = new Node(value);
        // will check if theres no node already in the list will just add the value here
        if(this.head === null){
            this.head = newNode;
            // will return the node
            return;
        }
        // else will do this
        let current = this.head; // will get the head and will loop till we reach to the node in the end which will have null in next
        while(current.next !== null){ // if the current node dosent have null will update the current withe the next value
            current = current.next;
        }// when loop condition becomes false will do this
        // will just add newNode to current which is the last node
        current.next = newNode;
    }


    // function for printing all 
    printAll(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(2);
list.add(7);
list.add(4);
list.add(-1);
list.add(5);

list.addToTail(0);

list.printAll();