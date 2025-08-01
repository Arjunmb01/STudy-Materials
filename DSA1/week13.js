
// ===================================binary search

function binarySearch(arr,target){
    let left = 0; right = arr.length -1;
    while(left <= right){
        const mid = Math.floor((left  + right) / 2)

        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid+1
        }else if(arr[mid] > target){
            right = mid-1
        }
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],10))


//===============================recursive binary search

function binarySearch(arr,target,left = 0, right = arr.length-1){
    if(left > right) return -1
    let mid = Math.floor((left + right) / 2)
    if(arr[mid] === target) {
        return mid
    }else if(arr[mid] < target){
        return binarySearch(arr,target,mid +1 , right)
    }else{
        return binarySearch(arr,target,left, mid-1)
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],7))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],72))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],3))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],1))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],10))


//=====================first and last occurance

// function findFirstlast(arr,target){
//     function binarySearch(isFirst){
//         let left = 0 , right = arr.length - 1 ; result = -1
        
//         while(left <= right){
//             let mid = Math.floor((left + right) / 2)
//             if(arr[mid] === target){
//                 result = mid
//                 if(isFirst) right = mid - 1
//                 else left = mid + 1
//             }else if (arr[mid] < target){
//                 left = mid + 1
//             }else{
//                 right = mid -1
//             }
//         }
//         return result
//     }
//     return [binarySearch(true),binarySearch(false)]
// }


// let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8]; 
// console.log(findFirstlast(arr, 2)); 
// console.log(findFirstlast(arr, 1));
// console.log(findFirstlast(arr, 8)); 