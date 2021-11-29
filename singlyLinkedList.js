/**
 * Implementation of singly linked list in JS
 * Author: Abhinav K
 * Date of publish: 26-11-2021
*/

/**
 * template for each node in a linked list
 */
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

/**
 * template for the linked list
 */
class LinkedList {
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
            node.next = null;
        }
        this.length--;

        return node.data;
    }

    //POP - Remove data from end
    pop(){
        //check if list is empty
        if(!this.head) return 'List is empty!';

        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let pre = null;
            while(node.next){
                pre = node;
                node = node.next;
            }
            pre.next = null;
            this.tail = pre;
        }
        this.length--;

        return node.data;
    }

    //Method to get the node in the list
    get(position){
        //check if list is empty
        if(position < 0 || position > this.length) return undefined;

        let node = this.head;
        let count = 0;
        while(position !== count){
            node = node.next;
            count++;
        }

        return node;
    }

    //Method to set the node in the list
    set(position, data){
        //check if list is empty
        let node = this.get(position);
        if(!node) return undefined;

        node.data = data;

        return this;
    }

    //Method to insert data at given position
    insertAt(position, data){
        if(!position) this.unshift(data);
        else if(position === this.length) this.push(data);
        else {
            let pre = this.get(position-1);
            let post = this.get(position);

            if(!pre || !post){
                return false;
            }
            let node = new Node(data);
            pre.next = node;
            node.next = post;
            this.length++;
        }
        return this;   
    }

    //Method to remove node from given position
    removeFrom(position){
        if(!position) this.shift();
        else if(position === this.length - 1) this.pop();
        else {
            let pre = this.get(position-1);
            let current = this.get(position);

            if(!pre || !current){
                return false;
            }
            pre.next = current.next;
            current.next = null;
            this.length--;
        }
        return this;   
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let pre = null;
        for (let index = 0; index < this.length; index++) {
            let nextNode = node.next;
            node.next = pre;
            pre = node;
            node = nextNode;
        }

        return this;
    }

}

let list = new LinkedList();
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

