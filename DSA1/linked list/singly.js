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
        
        node.next = this.head
        this.head = node
    }
    
    append(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
            return
        }
        
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
    }
    
    addValueAtIndex(index,value){
        const node = new Node(value)
        if(index < 0 || index > this.getLength()){
            console.log("Invalid Index")
            return
        }
        if(index === 0){
            return this.prepend(value)
        }else{
            let curr = this.head
            for(let i =0; i <index -1; i++){
                curr = curr.next
            }
            node.next  = curr.next
            curr.next = node
        }
    }
    
    addValueFromBack(index,value){
        let length = this.getLength()
        let start = length - index

        if(start <0 ||start > length){
            console.log("Invalid index")
            return
        }
        this.addValueAtIndex(start,value)
    }
    removeIndex(index){
        if(!this.head ||index < 0) return
        if(index === 0) {
            this.head = this.head.next
            return
        }
        
        let curr = this.head
        let prev = null
        let i = 0
        while(curr && i < index){
            prev = curr
            curr = curr.next
            i++
        }
        prev.next = curr.next
    }
    
    removeDuplicate(){
        let seen = new Set()
        let curr = this.head
        let prev = null
    
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next
            } else {
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }
    
    findMiddle(){
        if(!this.head) return null
        let slow = this.head
        let fast = this.head
        
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    
    reverse(){
        let prev = null
        let curr = this.head
        
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    isPalindrome(){
       if(!this.head || !this.head.next) return true 
       
       let fast = this.head
       let slow = this.head
       while(fast && fast.next){
           slow = slow.next
            fast = fast.next.next
       }
       
       let prev = null
       let curr = slow
       while(curr){
           let next = curr.next
           curr.next = prev
           prev = curr
           curr= next
       }
       
       let left = this.head
       let right = prev
       
       while(right){
           if(left.value !== right.value) return false
           left = left.next
           right = right.next
       }
       return true
    }
    
    
    
    getLength(){
        let curr = this.head
        let i = 0
        while(curr){
            i++
            curr= curr.next
        }
        return i
    }
    
    display(){
        let curr = this.head
        let res = ""
        while(curr){
            res += curr.value + " => "
            curr = curr.next
        }
        res += "null"
        return res
    }
}


let linked = new LinkedList()
linked.prepend(10)
linked.prepend(34)
linked.prepend(5)
linked.prepend(10)
linked.append(20)
linked.append(7)
linked.addValueAtIndex(4,33)
linked.addValueFromBack(2,6)
console.log(linked.display())
console.log(linked.getLength())
console.log("========================")
linked.removeIndex(5)
console.log(linked.display())

console.log("========================")

console.log(linked.findMiddle())
linked.removeDuplicate(5)
console.log(linked.display())

console.log("========================")

linked.reverse()
console.log(linked.display())

console.log(linked.isPalindrome())
