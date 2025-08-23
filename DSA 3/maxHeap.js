class MaxHeap {
    constructor() {
        this.h = []
    }
    p(i) { return Math.floor((i - 1) / 2) }
    l(i) { return 2 * i + 1 }
    r(i) { return 2 * i + 2 }

    swap(i, j) {
        [this.h[i], this.h[j]] = [this.h[j], this.h[i]]
    }

    insert(v) {
        this.h.push(v)
        let i = this.h.length - 1
        while (i > 0 && this.h[this.p(i)] < this.h[i]) {
            this.swap(i, this.p(i))
            i = this.p(i)
        }
    }

    extractMax() {
        if (this.h.length === 0) return null
        if (this.h.length === 1) return this.h.pop()

        const max = this.h[0]
        this.h[0] = this.h.pop()
        this.heapify(0)
        return max
    }

    delete(index){
        if(index >= this.h.length ) return null
        const deletedValue = this.h[index]


        this.h[index] = this.h[this.h.length-1]
        this.h.pop()

        if(index < this.h.length ){
            this.heapify(index)

            let parent = this.p(index)
            if(index > 0 && this.h[this.p(i) > this.h[parent]]){
                this.swap(index, this.p(index))
                index = this.p(index)
            }
        }
        return deletedValue
    }

    heapify(i) {
        let l = i
        let left = this.l(i)
        let right = this.r(i)

        if (left < this.h.length && this.h[left] > this.h[l]) {
            l = left
        }

        if (right < this.h.length && this.h[right] > this.h[l]) {
            l = right
        }

        if (l !== i) {
            this.swap(i, l)
            this.heapify(l)
        }
    }

    peek() {
        return this.h[0] || null
    }

    print() {
        console.log(this.h)
    }
}




const heap = new MaxHeap();
heap.insert(20);
heap.insert(10);
heap.insert(30);
heap.insert(5);
heap.print(); // [30, 10, 20, 5]

console.log(heap.extractMax()); // 30
heap.print(); // [20, 10, 5]
