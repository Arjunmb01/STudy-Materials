//Selection sort
//Time Complexity :  O(n2)
//Sort Product Prices (Low to High)

function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < n-1; i++){
        let min = i
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i){
        [arr[i],arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

const prices = [499, 299, 699, 199, 899];
console.log("Sorted Prices:", selectionSort(prices));


// Sort Student Grades in Descending Order

function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < n-1; i++){
        let min = i
        for(let j = i +1; j < n; j++){
            if(arr[j] > arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}
const grades = [85, 92, 78, 90, 66];
console.log("Sorted Prices:", selectionSort(grades));
