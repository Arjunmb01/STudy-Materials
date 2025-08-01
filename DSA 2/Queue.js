//======================== Basic Queue (FIFO) with an Array


// class Queue{
//     constructor(){
//         this.items = []
//     }
    
//     enqueue(element){
//         this.items.push(element)
//     }
    
//     dequeue(){
//         if(this.isEmpty()) return "Queue is Empty"
//         return this.items.shift()
//     }
    
//     front(){
//         return this.isEmpty() ? "Queue is Empty" : this.items[0]
//     }
    
//     isEmpty(){
//         return this.items.length === 0
//     }
    
//     printQueue(){
//         console.log(this.items.join(" <- "))
//     }
// }

// const q = new Queue();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.printQueue();
// console.log(q.front())
// q.dequeue()
// q.printQueue();



//================================================ Queue with Array of Objects

// class ObjQueue{
//     constructor(){
//         this.items = []
//     }
    
//     enqueue(obj){
//         this.items.push(obj)
//     }
    
//     dequeu(){
//         if(this.isEmpty()) return null
//         return this.items.shift()
//     }
    
//     front(){
//         return this.isEmpty() ? null : this.items[0]
//     }
    
//     isEmpty(){
//         return this.items.length === 0
//     }
    
//     printQueue(){
//         console.log(this.items)
//     }
// }

// const customerQueue = new ObjQueue()

// customerQueue.enqueue({ id: 1, name: "Alice" });
// customerQueue.enqueue({ id: 2, name: "Bob" });
// customerQueue.enqueue({ id: 3, name: "Charlie" });

// customerQueue.printQueue();