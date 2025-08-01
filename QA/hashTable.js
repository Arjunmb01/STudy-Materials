class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    
    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    
    set(key,value){
        const index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value
                return
            }
        }
        this.table[index].push([key,value])
    }
    
    get(key){
        const index = this.hash(key)
        const bucket  = this.table[index]
        
        if(bucket){
            for(let pair of bucket){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }
        return undefined
    }
    
    remove(key){
        const i = this.hash(key)
        const bucket = this.table[i]
        
        if(bucket){
            for(let i =0; i< bucket.length; i++){
                if(bucket[i][0] === key){
                    bucket.splice(i,1)
                    return true
                }
            }
        }
        return false
    }
    
    display(){
        for(let i =0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


const map = new hashTable(10);

map.set("name", "Arjun");
map.set("age", 25);
map.set("mane", "Tiger"); 
map.display();
console.log("............................")
console.log(map.get("name")); // Arjun
console.log("............................")
console.log(map.get("mane")); // Tiger
console.log("............................")

map.remove("age");

map.display();













