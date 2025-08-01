// function isPanagram(s){
//     let letters = {}
//     let alphaCount =0
//     let i =0

//     while(true){
//         let char = s[i]
//         let found = false
//         if(char === undefined) break
//         if(char >= 'A' && char <= 'Z'){
//             char = char + ''
//         }
//         if(char >= 'a' && char <='z'){
//             for(let key in letters){
//                 if(key === char){
//                     found = true
//                     break;
//                 }
//             }    
//             if(!found){
//                 letters[char] = true
//                 alphaCount++
//             }    
//         }
//         if(alphaCount === 26 ) return true
//         i++
//     }
//     return false
// }

// let s = "The quick brown fox jumps over the lazy dog"
// // let s = 'Hello World'
// console.log(isPanagram(s)) 