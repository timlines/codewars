// Binary Search Tree

// root node
// child node, parent node
// leaf node has no children

// left and right node


// left is less, right is more than parent

// balanced / unbalanced

// Why are they usefull?

//  find element quickly by eleminating half the tree each time.
// ideal for insurtion and deletion

// How do we implement a BST?

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 0
    }

    size(){
        return this.count
    }

    insert(){
        this.count++

        let newNode = new Node(value)

        const searchTree = node => {
            // if value < node.value, go left
            if (value < node.value){
                // if no lfet child, append new
                if (!node.left) {
                    node.left = newNode
                }

                else{
                    searchTree(node.left)
                }
            }
            // if value > noce.value
            else if (value > node.value) {
                if ( !node.right) {
                    node.right = newNode
                }
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)

    }

    min(){
        let currentNode = this.root

        // continue conversing left until no more children

        while ( currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value

    }

    max(){
        let currentNode = this.root

        // continue conversing right until no more children

        while ( currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.value

    }

    contains(value){
        let currentNode = this.root
        

        while(currentNode){
            if ( value === currentNode.value) {
                return true

            }
            if ( value < currentNode.value ) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false
    }

    // depth first search


    

    // in-order
    dfsInOrder(){
        let result = []

        const traverse = node => {
            if (node.left) traverse(node.left)

                result.push(node.value)

            if (node.right) traverse(node.right)

            
        }

        return result

    }

    //pre-order
    // root, left, right
    dfsPreOrder(){
        let result = []

        const traverse = node => {
            // capture root node value
            result.push(node.value)
            // if left child exists, go left
            if (node.left) traverse(node.left)

            if (node.right) traverse(node.right)

            
        }

        return result

        

    }

    // post-order
    dfsPostOrder(){
        let result = []

        const traverse = node => {
            // if left child exists, go left
            if (node.left) traverse(node.left)
                
            if (node.right) traverse(node.right)
                    
            // capture root node value
            result.push(node.value)
            
        }

        return result

    }

    //breadth first search
    // use a queue

    bfs(){

        let result = []

        return result

    }

}

