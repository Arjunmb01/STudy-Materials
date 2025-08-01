//check whether array is sorted or not

// function sorted(arr){
//     let ascen = true
//     let desen = true
    
//     for(let i = 1; i< arr.length; i++){
//         if(arr[i] < arr[i-1]){
//             ascen = false
//         }else if(arr[i] > arr[ i - 1]){
//             desen = false
//         }
//     }
    
//     if(ascen) return " given array is sorted in ascending order"
//     if(desen) return " given array is sorted in descending order"
//     return "not sorted"
// }

// console.log(sorted([1, 2, 3, 4])); 

// console.log(sorted([9, 7, 5, 1]));
// console.log(sorted([1, 3, 2, 4]));

//===============================================>// >>>> Selection Sort===========================

// function selectionSort(arr){
//     let n = arr.length
    
//     for(let i = 0; i< n-1; i++){
//         let min = i
//         for(let j = i + 1 ; j < n; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min],arr[i]]
//     }
//     return arr
// }

// console.log(selectionSort([5, 2, 9, 1, 5, 6]))


// function selectionSort(arr){
//     for (let i = 0 ; i < arr.length ; i ++){
//         let min = i
//         for(let j = i + 1; j < arr.length;j++){
//             if(arr[j] > arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     return arr
// }

// console.log(selectionSort([12, 5, 8, 1, 17]));


// function selectionSortByAge(arr){
//     let n = arr.length
//     for(let i = 0; i < n; i++){
//         let min = i 
//         for(let j = i + 1; j < n; j++){
//             if(arr[j].age > arr[min].age){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     return arr
// }

// const people = [
//   { name: "Arjun", age: 25 },
//   { name: "Sneha", age: 20 },
//   { name: "Ravi", age: 30 },
//   { name: "Asha", age: 22 }
// ];

// console.log(selectionSortByAge(people));

