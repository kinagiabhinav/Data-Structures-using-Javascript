//Implementation of stack using linked list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    //PUSH
    push(data){
        let node = new Node(data);

        //check if stack is empty
        if(!this.front){
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;

        return this;
    }

    //pop in stack(shift in linked list)
    pop(){
        //check if stack is empty
        if(!this.front){
            return 'List is empty';
        }

        let data = this.front;
        if(this.length === 1){
            this.front = null;
            this.rear = null;
        } else {
            this.front = data.next;
            data.next = null;
        }
        this.length--;

        return data;
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.pop();