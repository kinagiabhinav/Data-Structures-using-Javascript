/**
 * Implementation of graph data structure
 *   0 - 1 - 2
 *   | / | 
 *   4 - 3
 */

/**
 * Adjacency list
 * [0 => [1,4]
 *  1 => [0,2,4,3]
 *  2 => [1]
 *  3 => [1,4]
 *  4 => [0,1,3]
 * ]
 */

class Graph{
    constructor(){
        this.adjacencyList = [];
    }

    //Add vertex to the graph
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    //Add edge between two vertex
    addEdge(vertex1, vertex2){
        //If there are no vertices return false
        if(!(this.adjacencyList[vertex1]) || !(this.adjacencyList[vertex2]))
            return false;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    //Remove edge between two vertex
    removeEdge(vertex1, vertex2){
        //If there are no vertices return false
        if(!(this.adjacencyList[vertex1]) || !(this.adjacencyList[vertex2]))
            return false;

        //Find index of vertex
        const vertex1Index = this.adjacencyList[vertex2].indexOf(vertex1);
        const vertex2Index = this.adjacencyList[vertex1].indexOf(vertex2);

        //Splice
        if(vertex1Index > -1)
            this.adjacencyList[vertex2].splice(vertex1Index, 1);

        if(vertex2Index > -1)
            this.adjacencyList[vertex1].splice(vertex2Index, 1);
    }

    //Remove vertex
    removeVertex(vertex){
        if(!this.adjacencyList[vertex])
            return false;
        
        //Remove edge and finally remove vertex
        while (this.adjacencyList[vertex].length) {
            const neighbour = this.adjacencyList[vertex].pop();
            this.removeEdge(neighbour, vertex);
        }

        //Delete vertex
        delete this.adjacencyList[vertex];
    }

    //Graph DFS traversal
    DFSTraversal(start){
        let visited = {};
        let result = [];
        let stack = [start];
        visited[start] = true;
        
        let current = null;
        //while stack is not empty
        //pop the element and push to result array
        while(stack.length){
            current = stack.pop();
            result.push(current);

            //Traverse next neighbour and add to stack
            this.adjacencyList[current].forEach(element => {
                if(!(visited[element])){
                    visited[element] = true;
                    stack.push(element);
                }
            });
        }
        return result;
    }

    //Graph BFS traversal
    BFSTraversal(start){
        let visited = {};
        let result = [];
        let queue = [start];
        visited[start] = true;
        
        let current = null;
        //while queue is not empty
        //pop the element and push to result array
        while(queue.length){
            current = queue.shift();
            result.push(current);

            //Traverse next neighbour and add to queue
            this.adjacencyList[current].forEach(element => {
                if(!(visited[element])){
                    visited[element] = true;
                    queue.push(element);
                }
            });
        }
        return result;
    }
}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(0,4);
g.addEdge(1,4);
g.addEdge(4,3);
g.addEdge(1,3);
console.log(g.adjacencyList);
console.log(g.DFSTraversal(0));
console.log(g.BFSTraversal(0));