class StackQueue{
    constructor(){
        this.q = []
    }
    
    push(x){
        this.q.push(x)
        let size = this.q.length
        while(size > 1){
            this.q.push(this.q.shift())
            size--
        }
    }
    
    pop(){
        if(this.isEmpty()) return "Stack is empty"
        return this.q.shift()
    }
    
    peek(){
        if(this.isEmpty()) return "Stack is empty"
        return this.q[0]
    }
    
    isEmpty(){
        return this.q.length === 0
    }
    
    print(){
        console.log(this.q.join("<="))
    }
}



const stack = new StackQueue();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();        

console.log(stack.pop());   
console.log(stack.peek());  
stack.print();              
