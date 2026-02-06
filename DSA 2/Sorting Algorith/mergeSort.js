//Merge Sort
//Time complexity: O(n log n)

function mergeSort(arr){
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    let left = [], right = []
    for(let i = 0; i < mid; i++){
        left[left.length] = arr[i]
    }
    for(let i = mid; i < arr.length; i++){
        right[right.length] = arr[i]
    }
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    let res = [], i = 0,j = 0,k =0
    
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            res[k] = left[i]
            i++
        }else{
            res[k] = right[j]
            j++
        }
        k++
    }
    
    while(i < left[i]){
        res[k] = left[i]
        i++
        k++
    }
    
    while(j < right[j]){
        res[k] = right[j]
        j++
        k++
    }
    
    return res
}

const numbers = [38, 27, 43, 3, 9, 82, 10];
mergeSort(numbers); 

console.log("Sorted:", mergeSort(numbers) );




function mergeSort(str){
    let arr = [...str]
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    let left = [], right = []
    for(let i = 0; i < mid; i++){
        left[left.length] = arr[i]
    }
    for(let i = mid; i < arr.length; i++){
        right[right.length] = arr[i]
    }
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    let res = [], i = 0,j = 0,k =0
    
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            res[k] = left[i]
            i++
        }else{
            res[k] = right[j]
            j++
        }
        k++
    }
    
    while(i < left.length){
        res[k] = left[i]
        i++
        k++
    }
    
    while(j < right.length){
        res[k] = right[j]
        j++
        k++
    }
    
    return res
}

const str =  " welcome to Bangalore"

console.log("Sorted:", mergeSort(str).join("") );
