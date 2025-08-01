const express = require("express");
const app = express();
const port = 3000;

// //................ path params
// app.get('/user/:id',(req,res)=>{
//     let userId = req.params.id
//     res.send(`my new user ID :${userId}`)
// })

// ...............query params
app.get('/student',(req,res)=>{
    let {name,department} = req.query
    res.send(`here is the details name:${name}, deparment:${department}`)
})


// //................ both path and query
// app.get('/products/:category',(req,res)=>{
//     const category = req.params.category;
//     const{miniprice,maxprice} = req.query
//     res.send(`category:${category},price range:${miniprice} - ${maxprice}`)
// })


// // .............sum of two numbers
// app.get('/sum/:num1/:num2',(req,res)=>{
//     const{num1,num2} = req.params
//     const sum = Number(num1) + Number(num2)
//     res.send(`the sum of two numbers is : ${sum}`)
// })

// // ..............multiply two numbers
// app.get('/mul/:num1/:num2',(req,res)=>{
//     const{num1,num2} = req.params
//     const mul = Number(num1) *  Number(num2)
//     res.send(`mul of two numbers is : ${mul}`)
// })


// // ............query params
// app.get('/user',(req,res)=>{
//   const {name} = req.query
//   res.send(`the user name is :${name}`)
// })

// app.get('/student',(req,res)=>{
//     const{dept,year} = req.query
//     res.send(`the department is : ${dept} and year is :${year}`)
// })

// // .............both query params and query params
// app.get('/order/:id',(req,res)=>{
//     const {id} = req.params
//     const {food,date} = req.query
//     res.send(`orderId:${id}, food:${food}, date:${date}`)
// })



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});       