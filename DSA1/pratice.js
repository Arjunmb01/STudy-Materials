class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
    
    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    
    insertAt(value, index){
        if(index === 0){
            this.prepend(value)
            return
        }
        const newNode = new Node(value)
        let current = this.head
        let previous = null
        let i = 0
        
        while(current && i < index){
            previous = current
            current = current.next
            i++
        }
        previous.next = newNode
        newNode.next = current
    }
    
    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
    }

    removeValue(value) {
        if (!this.head) return;
    
        // Case: value is at the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
    
        let current = this.head;
        let previous = null;
    
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }
    
        // Case: value not found
        if (!current) {
            console.log("Value not found in the list.");
            return;
        }
    
        // Remove the node
        previous.next = current.next;
    }
    
    
    print(){
        let current = this.head
        let result = ''
        while(current){
            result += current.value + ' => '
            current = current.next
        }
        console.log(result)
    }
}


const list = new linkedList()
list.append(10)
list.append(29)
list.append(40)
list.append(50)
list.prepend(100)
list.insertAt(150,2)

list.print()