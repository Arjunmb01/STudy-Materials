class TrieNode{
    constructor(){
        this.child = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new TrieNode()
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
        
        const dfs = (curr,path) =>{
            if(curr.isEndOfWord) sugg.push(path)
            for(let char in curr.child){
                dfs(curr.child[char], path+char)
            }
        }
        dfs(node,prefix)
        return sugg
    }
    
    delete(word){
        const dfs = (node,depth) => {
            if(!node) return false
            if(depth === word.length){
                if(!node.isEndOfWord) return false
                node.isEndOfWord = false
                return Object.keys(node.child).length === 0
            }
            
            let char = word[depth]
            if(dfs(node.child[char],depth+1)){
                delete node.child[char]
                return Object.keys(node.child).length === 0 && !node.isEndOfWord
            }
            return false
        }
        dfs(this.root,0)
    }
    
    countWords(node = this.root){
        let count = node.isEndOfWord ? 1 : 0
        for(let char in node.child){
            count += this.countWords(node.child[char])
        }
        return count
    }
    
    countPrefix(prefix){
        let node = this._searchNode(prefix)
        if(!node) return 0
        
        const dfs = (curr) =>{
            let count = curr.isEndOfWord ? 1 : 0
            for(let char in curr.child) count += dfs(curr.child[char])
            return count
        }
        return dfs(node)
    }
    
    longestCommonPrefix(){
        let node = this.root
        let prefix = ""
        
        while(node && Object.keys(node.child).length === 1 && !node.isEndOfWord){
            let char = Object.keys(node.child)[0]
            prefix += char
            node = node.child[char]
        }
        return prefix
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
// trie.delete("app")
// console.log(trie.auto("app")); 
console.log(trie.countPrefix("app"));
console.log(trie.longestCommonPrefix())