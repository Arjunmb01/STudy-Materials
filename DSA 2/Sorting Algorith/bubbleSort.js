//Sort an array of integers in ascending order using bubble sort.

function bubbleSort(arr){
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        let swapped = true
        for(let j = 0 ; j < n - i -1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if(!swapped)  break
    }
    return arr
}

let a = [5, 1, 4, 2, 8]
console.log(bubbleSort(a))

//Sort an array of floating point numbers.

let b = [3.2, 1.5, 4.8, 2.3]
console.log(bubbleSort(b))

//Sort an array in descending order using modified bubble sort. 

function bubbleSort(arr){
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        let swapped = true
        for(let j = 0 ; j < n - i -1; j++){
            if(arr[j] < arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if(!swapped)  break
    }
    return arr 
}

let c = [3, 1, 4, 2]
console.log(bubbleSort(c))

// Sort characters of a string in ascending order.

function bubbleSort(str){
    let arr = [...str]
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        let swapped = true
        for(let j = 0 ; j < n - i -1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if(!swapped)  break
    }
     return arr.join('')
}

let d = "bubble"

console.log(bubbleSort(d))

// Sort an array of strings alphabetically using bubble sort.

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

let arr = ["banana", "Apple", "cherry", "apple"];
console.log(bubbleSort(arr));