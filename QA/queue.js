class Queue{
    constructor(){
        this.queue = []
    }
    
    enqueue(value){
        this.queue.push(value)
    }
    
    dequeue(){
        if(this.isEmpty()) return "Queue is Empty"
        return this.queue.shift()
    }
    
    peek(){
        if(this.isEmpty()) return "Queue is Empty"
        return this.queue[0]
    }
    
    isEmpty(){
        return this.queue.length === 0
    }
    
    print(){
        console.log(this.queue.join(" => "))
    }
}

let q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)
q.print()
console.log(q.dequeue())
console.log(q.peek())
