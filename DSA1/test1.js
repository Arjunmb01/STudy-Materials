//=======================================factorial

// function factorial (n){
//     if( n === 0 || n === 1) return 1
//     return n * factorial (n-1)
// }

// console.log(factorial(5));


// let arr = [[5,7,4],[8,5,9],[4,9,7,3]];

// for(let i=0; i< arr.length;i++){
//     let row = arr[i]
//     for(let j = 0 ;j < row.length; j++){
//         let start = row[j]
//         let stop = row[j+1]

//         if(start <= stop){
//             for(let k = start; k<=stop ;k++){
//                 process.stdout.write(k + ' * ')
//             }
//         }else{
//             for(let k = start; k >= stop ;k--){
//                 process.stdout.write(k + ' * ')
//             }
//         }
//     }
//     console.log()

// }



// function printPattern(start = 1, next =1,limit =10){
//     if(limit === 0) return 
//     console.log(start)
//     return printPattern(start + next,next +1, limit -1)
// }

// printPattern()