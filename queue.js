//Implementation of queue using linked list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    //Push at the end
    enqueue(data){
        let node = new Node(data);

        //Check if queue is empty
        if(!this.front){
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;

        return this;
    }

    //Remove from the beginning
    dequeue(){
        //Check if queue is empty
        if(!this.front){
            return 'Queue is empty!';
        } 

        let node = this.front;
        if(this.size === 1){
            this.front = null;
            this.rear = null;
        } else {
            this.front = node.next;
            node.next = null;
        }
        this.size--;

        return node.data;
    }
}

let q = new Queue();
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.dequeue());
console.log(q.enqueue(4));


