// //=================================================closure

// const { resolve } = require("path");


// function outer(){
//     let count = 0
//     return function inner(){
//         count++
//        console.log(count);
//     }
// }

// const counter = outer()
// counter()
// counter()
// counter()
// counter()
// counter()
// counter()


// //================================= promise


// let p1 = new Promise((resolve,reject) => {
//     let a = 10

//     if(a>8){
//         resolve ("a is greater than 5")
//     }else{
//         reject ("a is less than 8")
//     }
// })


// let p2 = new Promise((resolve,reject) => {
//     let a = 6

//     if(a<5){
//         resolve ("a is less")
//     }else{
//         reject("a is greater")
//     }
// })


// let p3 = new Promise((resolve,reject) => {
//     let a = 6

//     if(a == 6 ){
//         resolve ("a is equal")
//     }else{
//         reject("a is not equal")
//     }
// })


// Promise.all([p1,p2,p3])
// .then((res) => console.log("All done", res))
// .catch((res) => console.log("something failed", res))
// //output

// // something failed a is greater


// Promise.allSettled([p1,p2,p3])
// .then(res => console.log(res))
// .catch(res => console.log(res))


// //======================0utput
// // [
// //   { status: 'fulfilled', value: 'a is greater than 5' },
// //   { status: 'rejected', reason: 'a is greater' },
// //   { status: 'fulfilled', value: 'a is equal' }
// // ]


// Promise.race([p1,p2,p3])
// .then(res => console.log(res))
// .catch(res => console.log(res))


// Promise.any([p1,p2,p3])
// .then(res => console.log(res))
// .catch(res => console.log(res))


// //====================================currying


// function add(a){
//     return function (b){
//         return function (c){
//             return a + b + c
//         }
//     }
// }


// const hei = add(1)(2)
// console.log(hei(3))


//============================call apply bind


// let person = {
//     name : "Arjun",
//     greet: function (greeting,message){
//         console.log(`${greeting },I'm ${this.name } ${message}`)
//     }
// }

// const person1 = {name:"Kannan"}

// person.greet.call(person1,"hello","Welcome back")
// person.greet.apply(person1,["Hello" , "Welcome"])
// const bout = person.greet.bind(person1)


// let a = [1, 2, 4, 5, 6, 7, 6, 7, 8, 9]

// for(let i = 0; i< a.length-1; i++){
//     for(let j = i+1; j<a.length;j++){
//         if(a[i] === a[j]){
//             for(let k = j ; k<a.length-1; k++){
//                 a[k] = a[k+1]
//             }
//         j--
//         a.length--
//         }
//     }
// }

// console.log(a)


let a = "my name is arjun"
let res =""
for(let i =0; i<a.length; i++){
    if(a[i+1] === " "|| i === a.length-1 ){
        res +=a[i].toUpperCase()
    }else{
        res += a[i]
    }
}

console.log(res)



for (let i = 0; i < a.length; i++) {
    // If the next character is space or it's the last character, capitalize it
    if (i==0||a[i-1] === " " ) {
        res += a[i].toUpperCase();
    } else {
        res += a[i];
    }
}


let ar = ["apple","orange","pineapple","banana"]
let max = 0
let word = ""
for(let i = 0; i< ar.length; i++){

    if(ar[i].length > max){
        word = ar[i]
        max = ar[i].length
    }
}

console.log (word)