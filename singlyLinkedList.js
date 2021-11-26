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
        const node = new Node(data);

        //check if list is empty
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    //UNSHIFT - Insert data at the beginning
    unshift(data){
        const node = new Node(data);
        
        //check if list is empty
        if(!this.head){
            this.head = node;
            this.tail = node;       
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
}

let list = new LinkedList();
list.push(1);
list.unshift(0);


