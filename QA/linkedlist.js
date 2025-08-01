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
    
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    
    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        
        let curr = this.head
        
        while(curr.next){
            curr = curr.next
        }
        
        curr.next = newNode
    }
    
    insertAt(value,pos){
        if(pos === 0){
            this.prepend(value)
            return
        }
        const newNode = new Node(value)
        let curr = this.head
        let prev = null
        let i = 0
        
        while(curr && i < pos){
            prev= curr
            curr = curr.next
            i++
        }
        prev.next = newNode
        newNode.next = curr
        
    }
    
    insertFromEnd(pos,value){
        const len = this.getLength()
        const start = len - pos
        if(start < 0 || start >len){
            console.log("Invalid Position")
            return
        }
        this.insertAt(value,start)
    }
    
    remove(index){
        if(!this.head) return
        if(index === 0){
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
    removeValue(value){
        if(!this.head) return
        if(this.head.value === value){
            this.head = this.head.next
            return
        }
        let curr = this.head
        let prev = null
        
        while(curr && curr.value !== value){
            prev = curr
            curr = curr.next
        }
        prev.next = curr.next
    }
    
    removeDupli(){
        let seen  = new Set()
        let curr = this.head
        let prev = null
        
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next
            }else{
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }
    
    getLength(){
        let count = 0
        let curr = this.head
        while(curr){
            count ++
            curr = curr.next
        }
        return count
    }
    
    print(){
        let curr = this.head
        let res = ""
        
        while(curr){
            res += curr.value + " => "
            curr = curr.next
        }
        res += " null "
        console.log(res)
    }
}


let list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(20)
list.prepend(5)
list.insertAt(15, 2)
list.insertFromEnd(1, 25)
list.print() 
list.removeValue(15)
list.print() 
list.removeDupli()
list.print()
