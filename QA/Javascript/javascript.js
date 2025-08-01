// //============================================prefix sum

// arr = [2, 4, 1, 3, 7]
// let prefix = []
// prefix[0] = arr[0]
// for(let i = 1; i<arr.length;i++){
//     prefix[i] = prefix[i-1]+ arr[i]
// }
// console.log(prefix)

//================================================merge 2 array and remove duplicates

// let arr1 = [3,2,5,6,7,2]
// let arr2 = [4,2,6,8,3,7]

// arr1 = [...arr1,...arr2]

// for(let i = 0; i<arr1.length; i++){
//     let flag = false
//     for(let j = arr1.length-1; j>=0;j--){
//         if(arr1[i]===arr1[j] && i !==j){
//             flag = true
//             arr1.splice(j,1)
//             j--
//         }
//     }
//     if(flag === true){
//         arr1.splice(i,1)
//         i--
//     }
// }

// console.log(arr1)

//=============================================capitalize last letter of the each word

// let a = "my name is arjun"

// let out = a.split(" ")
// .map((word) => {
//     if(word.length ===1){
//         return word.toUppercase()
//     }
//     let last = word[word.length-1].toUpperCase()
//     return word.slice(0,-1) + last
// })
// .join(" ")

// console.log(out)


// let a = "my name is arjun"

// let res = ""
// let word = ""

// for(let i =0; i <=a.length; i++){
//     let char = a[i] || " "
//     if(char === " "){
//         if(word){
//             res +=word.slice(0,-1) + word.at(-1).toUpperCase() + " "
//             word =""
//         }
//     }else{
//         word+= char
//     }
// }

// console.log(res.trim())


//=======================================================================reverse a string


// let a = "my name is arjun"
// let res = ""
// for(let i = a.length-1; i>=0;i--){
//     res += a[i]
// }

// console.log(res)


// const data1 = [{id:101,userId : 1,amount:250, status:"delivered",items : ["pen","notebook"]},{id:101,userId:1,amount:120,status:"pending",items:["stapler"]},{id:103,userId:3,amount:90,status:"cancelled",items:["mouse","keyboard"]},{id:104,userId:3,amount:90,status:"delivered",items:["eraser"]}]



// const arr = []

// function sample(data1,userId){
//     for(let data of data1){
//         if(data.userId === userId){
//             arr.push(data.items)
//         }
//     }
//     return arr.flat()
// }

// console.log(sample(data1,3))

//==================Total Amount Spent by Each User

// let spentByUser = {}

// for (let data of data1){
//     if(data.status === "delivered"){
//         spentByUser[data.userId] = (spentByUser[data.userId] || 0) + data.amount
        
//     }
// }

// console.log(spentByUser)

//=========================== Group Orders by User

// let spentByUser = {}

// for (let data of data1){
// if(!spentByUser[data.userId]){
//     spentByUser[data.userId] = []
// }
// spentByUser[data.userId].push(data)
// }

// console.log(spentByUser)

//=========================Find the Most Expensive Order

// const expensiveOrder = data1.reduce((max,order) => {
//     return order.amount > max.amount ? order : max
// },data1[0])

// console.log(expensiveOrder)


//=====================================================

// const total = data1.filter(order => order.status === "delivered").reduce((acc,cuu)=>{return acc+cuu.amount},0)

// console.log(total)

//========================sum of prime number

// let a = [1,2,3,4,5,6,7,8,9]
// let sum =0
// for(let i = 0; i < a.length ; i++){
//     let b = a[i]
//     if( b >1){
//         let isPrime = true
//         for(let j =2 ; j <= Math.sqrt(b); j++){
//             if(b%j ===0){
//                 isPrime = false
//                 break
//             }
//         }
//         if(isPrime){
//             sum += b
//         }
//     }
// }

// console.log(sum)


let oi = [{a:34},{b:32},{c:21},{d:66},{e:55}]
let first = -Infinity
let second = -Infinity
for(let i = 0; i < oi.length; i++){
    for(let key in oi[i]){
        let value = oi[i][key]

        if(value > first){
            second = first
            first = value
        }else if(value > second && value < first){
            second = value
        }
    }
}

console.log(second)


///

let a = [1, 2, [4, [5, 6], 7], 6, 7, 8, 9];
function flatten(a){
    let res = []
    for(let i of a){
        if(Array.isArray(i)){
            res = res.concat(flatten(i))
        }else{
            res.push(i)
        }
    }
    return res
}

console.log(flatten(a))


let theme;
console.log(theme);

function setTheme() {
  let theme;
  console.log(theme);
  function updateTheme() {
    theme = 'dark';
    console.log(theme);
  }
  theme = 'light';
  updateTheme();
  console.log(theme);
}

theme = 'default';

setTheme();



const invoices = [
  {
    id: 201,
    customerId: 10,
    total: 1500,
    status: 'paid',
    items: ['monitor', 'cable'],
  },
  {
    id: 202,
    customerId: 11,
    total: 2300,
    status: 'unpaid',
    items: ['laptop'],
  },
  {
    id: 203,
    customerId: 10,
    total: 600,
    status: 'paid',
    items: ['keyboard', 'mouse'],
  },
  {
    id: 204,
    customerId: 12,
    total: 800,
    status: 'cancelled',
    items: ['webcam'],
  },
];