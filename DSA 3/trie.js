class TriNode{
    constructor(){
        this.child ={}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){this.root = new TriNode()}

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new TriNode()
            }
            node = node.child[char]
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this._searchNode(word)
        return node !== null && node.isEndOfWord
    }

    startWith(prefix){
        return this._searchNode(prefix) !== null
    }

    _searchNode(str){
        let node = this.root
        for(let char of str){
            if(!node.child[char]) return null
            node = node.child[char]
        }
        return node
    }

    auto(prefix){
        let node = this._searchNode(prefix)
        if(!node) return []
        let sugg = []

        const dfs = (curr, path) => {
            if(curr.isEndOfWord){
                sugg.push(path)
            }
            for(let char in curr.child){
                dfs(curr.child[char], path+char)
            }
        }
        dfs(node,prefix)
        return sugg
    }
    
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log(trie.search("apple")); 
console.log(trie.search("app"));     
console.log(trie.startWith("ap")); 
console.log(trie.search("appl"));
console.log(trie.auto("app")); 