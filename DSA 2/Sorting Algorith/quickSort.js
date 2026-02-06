//QuickSOrt

//TimeCOmplexity: O(n^2)

function quickSort(arr,low =0,high = arr.length -1){
    if(low < high){
        const piviotIndex = partion(arr,low,high)
        quickSort(arr,low, piviotIndex -1)
        quickSort(arr,piviotIndex+1, high)
    }
    return arr
}

function partion(arr,low, high){
    const piviot = arr[high]
    let i = low -1
    for(let j = low; j<high;j++){
        if(arr[j] <= piviot){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    
    [arr[i+1], arr[high]] = [arr[i+1], arr[high]]
    return i +1
}

const str = " welcome to Bangalore";
let arr = [...str];

quickSort(arr); 

console.log("Sorted:", arr.join(""));
