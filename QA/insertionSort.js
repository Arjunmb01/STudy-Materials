function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i -1
        
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

let arr = [3,22,6,4,77,4,111,89]
console.log(insertionSort(arr))