class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function linkedList(arr){
    if(arr.length === 0) null
    const head = new Node(arr[0])

    let curr = head
    let i =1

    while(i < arr.length){
        const newNode = new Node(arr[i])
        curr.next = newNode
        curr = newNode
        i++
    }
    return head
}

function print(head){
    let curr = head
    let res = ''
    while(curr){
        res  += curr.value + ' => '
        curr = curr.next
    }
    console.log(res);
}

let arr = [1,2,3,4,5,6]
let head = linkedList(arr)
print(head)