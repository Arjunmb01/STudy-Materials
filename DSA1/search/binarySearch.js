

function BinarySearch (arr, target){
    let left = 0, right = arr.length-1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(target === arr[mid]  ){
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
             right = mid - 1;
        }
    }
    return arr
}

let arr = [1,2,4,5,7,9,3]
let tar = 9
console.log(BinarySearch(arr,tar))