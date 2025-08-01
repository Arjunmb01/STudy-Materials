class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    insert(value){
        const newNode = new Node(value)
    
        if(!this.root) {
            this.root = newNode
            return
        }
        
        let curr = this.root
        
        while(true){
            if(value < curr.value){
                if(!curr.left){
                    curr.left = newNode
                    return
                }
                curr = curr.left
            }else if(value > curr.value){
                if(!curr.right){
                    curr.right = newNode
                    return
                }
                curr = curr.right
            }else{
                return
            }
        }
    }
    
    bfs(){
        const res =[] ,queue = []
        
        if(this.root) queue.push(this.root)
        
        while(queue.length){
            const node = queue.shift()
            res.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return res
    }
    
    inorder(node = this.root , res= []){
        if(!node) return res
        this.inorder(node.left,res)
        res.push(node.value)
        this.inorder(node.right,res)
        return res
    }
    
    preorder(node = this.root, res = []){
        if(!node) return res
        res.push(node.value)
        this.preorder(node.left,res)
        this.preorder(node.right,res)
        return res
    }
    
    postorder(node = this.root, res = []){
        if(!node) return res
        this.postorder(node.left,res)
        this.postorder(node.right,res)
        res.push(node.value)
        return res
    }
    
    height(node = this.root){
        if(!node) return -1
        const left = this.height(node.left)
        const right = this.height(node.right)
        
        return 1 + Math.max(left,right)
    }
    
    depth(value){
        let curr = this.root
        let depth = 0
        while(curr){
            if(curr.value === value){
                return depth
                
            }
            curr = value < curr.value ? curr.left : curr.right
            depth++
        }
        return -1
    }
    
    kthLargest(v){
        let count = 0
        let res = null
        
        const trav = (node) => {
            if(!node || res !== null) return
            trav(node.right)
            count ++
            if(count === v) res = node.value
            trav(node.left)
        }
        trav(this.root)
        return res
    }
    
    isBal(node = this.root){
        if(!node) return true
        const left = this.height(node.left)
        const right = this.height(node.right)
        
        if(Math.abs(left - right) >  1) return false
        return this.isBal(node.left) && this.isBal(node.right)
    }
    
    isValid( node = this.root, min = -Infinity,max =Infinity){
        if(!node) return true
        if(node.value <= min || node.value >= max ) return false
        
        return this.isValid(node.left,min,node.value) && this.isValid(node.right,node.value,max)
    }
    
    search(value){
        let curr = this.root
        while(curr){
            if(value === curr.value) return true
            if(value < curr.value) curr = curr.left
            else{
                curr = curr.right
            }
        }
        return false
    }
    
    delete(val){
        let del =(node,val) => {
            if(val < node.value){
                node.left = del(node.left,val)
            }else if(val> node.value){
                node.right = del(node.right,val)
            }else{
                if(!node.left && !node.right) return null
                if(!node.left) return node.right
                if(!node.right) return node.left
                
                let min = this._finMin(node.right)
                node.value = min.value
                node.right = del(node.right,min.value)
            }
            return node
        }
        this.root = del(this.root,val)
    }
    
    _finMin(node){
        while(node.left){
            node = node.left
        }
    return node
    }
}



const bst = new BST()
bst.insert(30)
bst.insert(22)
bst.insert(12)
bst.insert(55)
bst.insert(23)
bst.insert(34)

console.log("BSF : ", bst.bfs())
console.log("inorder : ", bst.inorder())
console.log("preorder : ", bst.preorder())
console.log("postorder : ", bst.postorder())
console.log("Is Valid BST : ", bst.isValid())
console.log("height : ", bst.height())
console.log("depth of 55 : ", bst.depth(55))
console.log("1st largest : ",  bst.kthLargest(1))
console.log("IsBalanced : ", bst.isBal())
console.log("Search 55 : ", bst.search(12))
bst.delete(12);
console.log("Inorder after delete 12:", bst.inorder());