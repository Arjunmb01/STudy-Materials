//================= Find an Element in a Sorted Array

// function binarySearch(arr,target){
//     let left = 0 , right = arr.length-1;
    
//     while(left <= right){
//         let mid = Math.floor((left + right))
        
//         if(arr[mid] === target) return mid
//         else if (arr[mid] < target) left = mid + 1
//         else right = mid -1
//     }
    
//     return - 1
// }
// let arr = [1,2,3,4,5,6]
// let target = 5

// console.log(binarySearch(arr,target))

//=====================Find First and Last Position of an Element

// function findFirstAndLast(arr, target) {
//     function binarySearchFirst(isFirst) {
//         let left = 0, right = arr.length - 1, result = -1;
        
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);

//             if (arr[mid] === target) {
//                 result = mid; 
//                 if (isFirst) right = mid - 1;
//                 else left = mid + 1; 
//             } else if (arr[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return result;
//     }

//     return [binarySearchFirst(true), binarySearchFirst(false)];
// }

// // Test with sorted array
// let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8]; 
// console.log(findFirstAndLast(arr, 2)); // Output: [1, 2]
// console.log(findFirstAndLast(arr, 1)); // Output: [0, 0]
// console.log(findFirstAndLast(arr, 8)); // Output: [8, 8]
// console.log(findFirstAndLast(arr, 10)); // Output: [-1, -1]


//========================factorial of number

// function factorial(n){
//     if (n == 0 || n === 1 ) return 1
//     return n * factorial(n-1)
// }


//===========================Fibonacci Sequence

// function fibno(n){
//     if(n===0) return 0
//     if(n===1) return 1
//     return fibno(n-1)+ fibno(n-2)
// }

// console.log(fibno(6))

//==============================Sum of Digits

// function sum(n){
//     if(n===0) return 0
//     return (n%10)+ sum(Math.floor(n/10))
// }

// console.log(sum(1234))

//=================Reverse a String

// function reverse(str){
//     if(str.length === 0) return ""
//     return str[str.length - 1] + reverse(str.slice(0,-1))
// }

// console.log(reverse('arjun'))

// function largest(arr,n){
//     if(n===1 ) return arr[0]
//     return Math.max(arr[n-1],largest(arr,n-1))
// }
// let arr = [1,2,3,5,6,2,9]
// let n= arr.length
// console.log(largest(arr,n))


// function scndLargest(arr,n,largest = -Infinity,scndLarge = -Infinity){
//     if(n===0) return scndLarge
    
//     let curr = arr[n-1]
    
//     if(curr > largest){
//         scndLarge = largest
//         largest = curr
//     }else if(curr > scndLarge && curr !== largest ){
//         scndLarge = curr
//     }
    
//     return scndLargest(arr,n-1,largest,scndLarge)
// }
// let arr = [10, 20, 50, 30, 90, 40];
// console.log(scndLargest(arr, arr.length)); 