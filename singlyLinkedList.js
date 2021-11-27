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
        }

        let pre = null;
        while(node.next){
            pre = node;
            node = node.next;
        }
        pre.next = null;
        this.tail = pre;

        this.length--;

        return node.data;
    }
}

let list = new LinkedList();
list.push(1);
list.unshift(0);


