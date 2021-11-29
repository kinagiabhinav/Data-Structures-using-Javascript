/**
 * Implementation of doubly linked list in JS
 * Author: Abhinav K
 * Date of publish: 29-11-2021
*/

/**
 * template for each node in a linked list
 */
 class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

/**
 * template for the linked list
 */
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //PUSH - Insert data at the end
    push(data){
        let node = new Node(data);

        //check if list is empty
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;

        return this;
    }

    //UNSHIFT - Insert data at the beginning
    unshift(data){
        let node = new Node(data);
        
        //check if list is empty
        if(!this.head){
            this.head = node;
            this.tail = node;       
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;

        return this;
    }

    //SHIFT - Remove data from beginning
    shift(){
        //check if list is empty
        if(!this.head) return 'List is empty!';

        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            node.next = null;
            
        }
        this.length--;

        return node.data;
    }

    //POP - Remove data from end
    pop(){
        //check if list is empty
        if(!this.head) return 'List is empty!';

        let node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;

        return node.data;
    }

    //Method to get the node in the list
    get(pos){
        if(pos < 0 || pos > this.length) return undefined;
        let count;
        let mid = this.length/2;

        let current;
        if(pos <= mid){
            count = 0;
            current = this.head;
            while(count !== pos){
                current = current.next;
                count++;
            }
        } else {
           count = this.length;
           current = this.tail;
            while(count !== pos){
                current = current.prev;
                count--;
            } 
        }
        

        return current;
    }

    set(pos, data){
        let position =  this.get(pos);
        if(position){
            position.data = data;
            return this;
        }
        return position;
    }

    insertAt(pos, data){
        if(pos === 0) return this.unshift(data);
        if(pos === this.length) return this.push(data); 
        
        let pre = this.get(pos-1);
        let current = this.get(pos);

        if(!pre || !current) return undefined;

        let node = new Node(data);
        node.prev = pre;
        node .next = current;

        pre.next = node;
        current.prev = node;
        
        this.length++;
        return this;
    }

    removeAt(pos){
        if(pos === 0) return this.shift();
        if(pos === this.length - 1) return this.pop();

        let pre = this.get(pos-1);
        let current = this.get(pos);

        if(!pre || !current) return undefined;

        pre.next = current.next;
        current.prev = current.next.prev;

        this.length--;
        return this;
    }

    reverse(){
        if(!this.tail) return undefined;
        let lastNode = this.tail;
        this.tail = this.head;
        this.head = lastNode;     

        for(let i = 0; i < this.length; i++){
           let temp = lastNode.prev;
           lastNode.prev = lastNode.next;
           lastNode.next = temp;

           lastNode = lastNode.next;
        }

        return this;
    }

}

let list = new DoublyLinkedList();
list.push(1);
list.unshift(0);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.pop();
list.shift();
list.get(1);
list.reverse();

