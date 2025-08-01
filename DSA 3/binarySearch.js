class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class Binarytree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
            return
        }

        const queue = [this.root]
        while (queue.length) {
            const current = queue.shift()

            if (!current.left) {
                current.left = node
                return
            } else {
                queue.push(current.left)
            }

            if (!current.right) {
                current.right = node
                return
            } else {
                queue.push(current.right)
            }
        }
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }

    preorder(node) {
        if (node) {
            console.log(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node) {
        if (node) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
        }
    }



}

const tree = new Binarytree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Inorder Traversal:");
tree.inorder(tree.root);

console.log("Preorder Traversal:");
tree.preorder(tree.root);

console.log("Postorder Traversal:");
tree.postorder(tree.root);