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
        if(!this.root){
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
        let queue = [], res = []
        
        if(this.root) queue.push(this.root)
        
        while(queue.length){
            const node = queue.shift()
            res.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return res
    }
    
    inorder(node = this.root, res = []){
        if(!node) return res
        this.inorder(node.left,res)
        res.push(node.value)
        this.inorder(node.right,res)
        return res
    }
    
    preorder(node = this.root,res = []){
        if(!node) return res
        res.push(node.value)
        this.preorder(node.left,res)
        this.preorder(node.right,res)
        return res
    }
    
    postorder(node = this.root,res= []){
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
            if(curr.value === value) return depth
            curr = value < curr.value ? curr.left : curr.right
            depth++
        }
        return -1
    }
    
    isBal(node= this.root){
        if(!node) return true
        const left  = this.height(node.left)
        const right = this.height(node.right)
        if(Math.abs(left- right) > 1) return false
        return this.isBal(node.left) && this.isBal(node.right)
    }
    
    isValidBST(node = this.root , min = -Infinity, max = -Infinity){
        if(!node) return true
        if(node.value <= min || node.value >= max) return false
        return this.isValidBST(node.left,min,node.value) && this.isValidBST(node.right,node.value,max)
    }
    
    kthLargest(k){
        let res = null
        let count = 0
        
        const trav = (node) => {
            if(!node || res !== null) return 
            trav(node.right)
            count++
            if(count === k) res= node.value
            trav(node.left)
        }
        trav(this.root)
        return res
    }
    
        kthSmallest(k){
        let res = null
        let count = 0
        
        const trav = (node) => {
            if(!node || res !== null) return 
            trav(node.left)
            count++
            if(count === k) res = node.value
            trav(node.right)
        }
        trav(this.root)
        return res
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
    
    delete(value){
        let del = (node,val) => {
            if(val < node.value){
                node.left = del(node.left,val)
            }else if(val > node.value){
                node.right = del(node.right,val)
            }else{
                if(!node.left && !node.right) return null
                if(!node.right) return node.left
                if(!node.left) return node.right
                
                let min = this._findMin(node.right)
                node.value = min.value
                node.right = del(node.right, min.value)
            }
        }
        del(this.root,value)
    }
    
    _findMin(node){
        while(node.left){
            node = node.left
        }
        return node
    }
    
    findMin(node = this.root){
        if(!node) return null
        while(node.left) node = node.left
        return node.value
    }
    
    findMax(node = this.root){
        if(!node) return null
        while(node.right) node = node.right
        return node.value
    }
    
    countNode(node = this.root){
        if(!node) return 0
        return 1 + this.countNode(node.left) + this.countNode(node.right)
    }
    
    countLeaves(node = this.root){
        if(!node) return 0
        if(!node.left && !node.right) return 1
        return this.countLeaves(node.left) + this.countLeaves(node.right) 
    }
    
    closestValue(target){
        let curr = this.root
        let closest = curr.value
        
        while(curr){
            if(Math.abs(curr.value - target) < Math.abs(closest - target)) closest = curr.value
            curr = target < curr.value ? curr.left : curr.right
        }
        return closest
    }
    
    levelOrder(){
        let res = []
        if(!this.root) return res
        let queue = [this.root]
        
        while(queue.length){
            let size = queue.length
            let level = []
            
            for(let i =0 ; i < size ; i++ ){
                let node = queue.shift()
                level.push(node.value)
                
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            res.push(level)
        }
        return res
    }
}

let bst = new BST();

let values = [50, 30, 70, 20, 40, 60, 80];

for (let v of values) {
    bst.insert(v);
}

console.log("BFS    :- ", bst.bfs())
console.log("INORDER   :- ",bst.inorder())
console.log("PREORDER   :- ",bst.preorder())
console.log("POSTORDER   :- ",bst.postorder())
console.log("HEIGHT    :- ", bst.height())
console.log("DEPTH    :- ", bst.depth(60))
console.log("2nd Largest    :- ", bst.kthLargest(2))
console.log("2nd SMALLEST      :- ", bst.kthSmallest(2))
console.log("ISBALANCED    :- ", bst.isBal())
console.log("ISVALID    :- ", bst.isValidBST())
console.log("Search 5    :- ", bst.search(5))
console.log("FINDMIN    :- ", bst.findMin())
console.log("FINDMAX    :- ", bst.findMax())
console.log("Count Number of Node    :- ", bst.countNode())
console.log("Count Number of Leaves    :- ", bst.countLeaves())
console.log("Closest value to 23    :- ", bst.closestValue())
console.log("Levelorder   :- ", bst.levelOrder())
















