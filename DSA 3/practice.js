class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
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
            } else{
                if(!curr.right){
                    curr.right = newNode
                    return
                }
                curr = curr.right
            }
        }
    }

    search(value){
        let curr = this.root
        while(curr){
            if(value === curr.value) return true
            if(value < curr.value) curr = curr.left
            else curr = curr.right
        }
        return false
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.search(5));  
console.log(bst.search(20)); 