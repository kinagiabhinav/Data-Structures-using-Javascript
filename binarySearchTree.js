//Implementation of binarySearch tree

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;        
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(data){
        //Allocate node
        let node = new Node(data);

        if(!this.root)
            return this.root = node;

        let current =  this.root;
        //Infinite loop till node is placed
        while (true) {
            //No root / same as root assign and return
            if(current.data === node.data)
                return current = node;  
            
            //Node is greater than current data
            else if(node.data > current.data){
                //Check if right of current is null
                if(current.right === null)
                    return current.right = node;
                current = current.right;
            }
            //Node is less than current data
            else {
                //Check if left of current is null
                if(current.left === null)
                    return current.left = node;
                current = current.left;
            }
        }     
    }
}

let bst = new BinarySearchTree();
bst.insert(3);
bst.insert(5);
bst.insert(6);
bst.insert(4);
bst.insert(2);

console.log(bst);