//Implementation of stack using linked list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    //PUSH (unshift in linked list)
    push(data){
        let node = new Node(data);

        //check if stack is empty
        if(!this.top){
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;

        return this;
    }

    //pop in stack(shift in linked list)
    pop(){
        //check if stack is empty
        if(!this.top){
            return 'List is empty';
        }

        let data = this.top;
        if(this.size === 1){
            this.top = null;
            this.bottom = null;
        } else {
            this.top = data.next;
            data.next = null;
        }
        this.size--;

        return data;
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s);
s.pop();
console.log(s);