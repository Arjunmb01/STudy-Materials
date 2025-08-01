class Graph{
    constructor(){
        this.graph = {}
    }
    
    addEdges(a,b){
        if(!this.graph[a]) this.graph[a] = []
        if(!this.graph[b]) this.graph[b] = []

        this.graph[a].push(b)
        this.graph[b].push(a)
    }

    bfs(start){
        let visited = new Set()
        let queue = [start]
        visited.add(start)

        while(queue.length){
            let node = queue.shift()
            console.log(node)

            for(let i of this.graph[node]){
                if(!visited.has(i)){
                    visited.add(i)
                    queue.push(i)
                }
            }
        }
    }

    dfs(start){
        let visited = new Set()

        const dfsStart = (node) => {
            visited.add(node)
            console.log(node)

            for(let i of this.graph[node]){
                if(!visited.has(i)){
                    dfsStart(i)
                }
            }
        }
        dfsStart(start)
    }

    hasCycle(){
        const visited = new Set()

        const dfs = (node,parent) =>{
            visited.add(node)
            for(let i of this.graph[node]){
                if(!visited.has(i)){
                    if(dfs(i,node)) return true
                }else if(i !== parent) return true
            }
            return false
        }

        for(let i in this.graph){
            if(!visited.has(i)){
                if(dfs(i,null)) return true
            }
        }
        return false
    }

    print(){
        for(let i in this.graph){
            console.log(`${i} => ${this.graph[i].join(" , ")}`)
        }
    }
}

const g = new Graph();
g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("C", "E");
// g.addEdges("C", "A");

console.log("Graph:");
g.print();

console.log("BFS:");
g.bfs("A");

console.log("DFS:");
g.dfs("A");

console.log("Contains Cycle:", g.hasCycle()); 