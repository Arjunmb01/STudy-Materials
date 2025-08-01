class Stack{
    constructor(){
        this.stack = []
    }
    
    push(x){
        this.stack.push(x)
    }
    
    pop(){
        if(this.isEmpty()) return "STack is empty"
        return this.stack.pop()
    }
    
    peek(){
        if(this.isEmpty()) return "Stack is empty"
        return this.stack[this.stack.length -1]
    }
    
    reverse(){
        if(this.isEmpty()) return
        
        let temp = this.pop()
        this.reverse()
        this.insertBottom(temp)
    }
    
    insertBottom(value){
        if(this.isEmpty()) {
            this.push(value)
            return
        }
        
        let temp = this.pop()
        this.insertBottom(value)
        this.push(temp)
    }
    
    isEmpty(){
        return this.stack.length === 0
    }
    
    print(){
        console.log(this.stack.join("<="))
    }
}


const stack = new Stack
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()

stack.reverse()
stack.print()

console.log(stack.pop())
console.log(stack.peek())