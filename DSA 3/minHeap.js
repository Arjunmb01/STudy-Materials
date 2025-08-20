class MinHeap{
    constructor(){
        this.h = []
    }

    parentIndex(i) {return Math.floor((i - 1) / 2)}
    leftChild(i) { return 2 * i + 1}
    rightChild(i) { return 2 * i + 2}

    swap(i,j) {
        [this.h[i], this.h[j]] = [this.h[j], this.h[i]]
    }

    insert(value){
        this.h.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let i = this.h.length-1
        while(i > 0 && this.h[this.parentIndex(i)] > this.h[i]){
            this.swap(i,this.parentIndex(i))
            i = this.parentIndex(i)
        }
    }

    extractMin(){
        if(this.h.length === 0) return null
        if(this.h.length === 1) return this.h.pop()

        const min = this.h[0]
        this.h[0] = this.h.pop()
        this.heapifyDown(0)
        return min
    }

    heapifyDown(i){
        let sm = i
        const left = this.leftChild(i)
        const right = this.rightChild(i)

        if(left < this.h.length && this.h[left] < this.h[sm]){
            sm = left
        }

        if(right < this.h.length && this.h[right] < this.h[sm]){
            sm = right
        }

        if(sm !== i){
            this.swap(i,sm)
            this.heapifyDown(sm)
        }
    }

    getMin(){
        return this.h[0] || null
    }
}


const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(14);
console.log(minHeap.getMin()); // 5
console.log(minHeap.extractMin()); // 5
console.log(minHeap.getMin()); // 10