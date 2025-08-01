class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// // Function to find the middle node of a linked list
// function findMiddle(head) {
//     if (!head) return null;
    
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow;
// }


// Function to insert a node at a specific position

// function insertAt(head,position, value){
//     let newNode = new Node(value)

//     if(position === 0){
//         newNode.next = head
//         return newNode
//     }

//     let curr = head
//     let prev = null
//     let index =0

//     while(curr!== null && index < position){
//         prev = curr
//         curr = curr.next
//         index++
//     }

//     prev.next = newNode
//     newNode.next =  curr

//     return head
// }

// Function to print the linked list
function printList(head) {
    let result = '';
    let temp = head;
    while (temp) {
        result += temp.value + ' --> ';
        temp = temp.next;
    }
    result += 'null';
    console.log(result);
}


// Creating the linked list
let node = new Node(5);
node.next = new Node(6);
node.next.next = new Node(7);
node.next.next.next = new Node(8);
node.next.next.next.next = new Node(9);

printList(node); // Print linked list



 node = insertAt(node,2,50)
 printList(node)





