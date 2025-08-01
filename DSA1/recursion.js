//sum of array ekements

// function sumArray(arr,n){
//     if(n === 0) return 0
//     return arr[n-1] + sumArray(arr,n-1)
// }


// console.log(sumArray([1,2,3,4,5],5));


//reverse an array

// function reverse(arr,left =0,right =arr.length-1){
//     if(left > right) return arr

//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp

//     return reverse(arr,left+1,right-1)
// }

// console.log(reverse([1,2,3,4,5]));


//========================================================PRINT HELLO WORLD


// function printHelloWorld(n){
//     if(n<=0) return 
//     console.log(`Hello world......`)
//     printHelloWorld(n-1)
// }

//  printHelloWorld(5)

//=========================================Print elements of an array using recursion.

// function printArray(arr,index=0){
//     if(index >= arr.length) return
//     console.log(`${arr[index]}`);
//     printArray(arr,index+1)
// }

// printArray([1,2,3,4,5])

//=======================================Find the sum of digits of a number using recursion.

// function sum(num){
//     if(num === 0) return 0

//     let last = num%10

//     return last + sum((num-last)/10)
// }

// let num = 12345
// console.log(sum(num));


//=======================================Find the product of digits of a number using recursion.

// function product(num){
//     if (num < 10) return num;  
//     let last  = num % 10
//     remaining = (num - last) /10
//     return last * product(remaining)
// }

// let num = 11
// console.log(product(num))