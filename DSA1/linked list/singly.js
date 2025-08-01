class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // isEmpty() {
    //   return this.size === 0;
    // }
  
    // getSize() {
    //   return this.size;
    // }
  
    //prepend (add a new node at the starting of the list)
    prepend(value) {
      const node = new Node(value);
      if (this.head === null) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      // this.size++;
    }
  
    //append (add values to the ending of the list)
    append(value) {
      const node = new Node(value);
      if (this.head === null) {
        this.head = node;
      } else {
        let curr = this.head
        while(curr.next!==null){
          curr = curr.next
        }
        curr.next = node
      }
    }
  
    //inserting a node at given index
    insertWithIndex(value, index) {
      if (index < 0 || index > this.size) {
        console.log("Enter a valid index");
      }
  
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
          curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
        this.size++;
      }
    }
  
    //removning an element in a given index
    removewithIndex(index) {
      if (index < 0 || index > this.size) {
        console.log("Enter a valid index");
      }
  
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--;
    }
  
    //pop , removing element from the end of the list
    pop() {
      if (this.isEmpty()) {
        return undefined;
      } else {
        let curr = this.head;
        let newTail = curr;
        while (curr.next) {
          newTail = curr;
          curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        if (this.isEmpty()) {
          this.head = null;
          this.tail = null;
        }
      }
    }
  
    //shift, removing the frist element,
    shift() {
      if (this.isEmpty()) {
        return undefined;
      } else {
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.isEmpty()) {
          this.tail = null;
        }
      }
    }
  
    //remove the element by value
    removeByValue(value) {
      if (this.isEmpty()) {
        console.log("the list is empty");
      } else {
        if (this.head.value === value) {
          this.head = this.head.next;
          this.size--;
        } else {
          let curr = this.head;
          while (curr.next && curr.next.value !== value) {
            curr = curr.next;
          }
          if (curr.next) {
            const removedNode = curr.next;
            curr.next = removedNode.next;
            this.size--;
          }
        }
      }
    }
  
      //removing duplicates
      removeDuplicates() {
        if (this.isEmpty()) {
          return "List is empty";
        } else {
          let hash = {};
          let curr = this.head;
          let prev = curr;
          while (curr.next) {
            let currValue = curr.value;
            if (!(currValue in hash)) {
              hash[currValue] = currValue;
              prev = curr;
            } else {
              prev.next = curr.next;
            }
            curr = curr.next;
          }
        }
        this.print();
      }
  
      //find cycle in linked list 
      isCycle(){
  
        let slow = this.head;
  
        let fast = this.head;
  
        while(fast !== null && fast.next !== null){
          slow = slow.next;
          fast = fast.next.next;
          if(slow == fast){
            return true;
          }
        }
        return false;
      }
  
    //printing the linked list
    print() {
      if (this.isEmpty()) {
        console.log("The list is empty");
        return;
      } else {
        let prev = this.head;
        let values = "";
        while (prev) {
          values += `${prev.value} + >> `;
          prev = prev.next;
        }
        console.log(values);
      }
    }
  
    //geting tail
    getTail() {
      console.log(this.tail.value);
    }
  }
  
  let node1 = new LinkedList();
  node1.prepend(4);
  node1.prepend(5);
  node1.append(6);
  node1.prepend(10);
  
  node1.print();
  node1.getTail();
  node1.pop();
  node1.print();
  console.log(node1.isCycle());





class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
    
    append(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr= curr.next
            }
            curr.next = node
        }
    }
    
    insertAt(position, value){
        const node = new Node(value)
        if(position === 0){
            node.next = this.head
            this.head = node
            return
        }
        
        let curr = this.head
        let prev = null
        let index = 0
        
        while(curr && index < position){
            prev = curr
            curr = curr.next
            index++
        }
        
        if(prev ===null){
            console.log('Invalid position')
        }
        prev.next = node
        node.next = curr
    }
    
    removeByValue(value){
        if(!this.head){
            console.log('List is Empty')
            return
        }
        
        if(this.head.value === value){
            this.head = this.head.next
            return
        }
        
        let cur = this.head
        let prev = null
        
        while(cur && cur.value !== value){
            prev = cur
            cur = cur.next
        }
        
        if(!cur){
            console.log('Value not found')
        }
        prev.next =cur.next
    }
    
    post(){
        let cur = this.head
        let val = ''
        while(cur){
           val += cur.value + ' --> '
           cur = cur.next
        }
        console.log(val + null)
    }
}


let list = new LinkedList()
list.prepend(9)
list.prepend(3)
list.append(10)
list.append(15)
list.insertAt(2,8)
list.post()
list.removeByValue(8)
list.post()




console.log(isNaN('1347'))//false
console.log(isNaN(4237))//true
console.log(isNaN('abc'))//false




