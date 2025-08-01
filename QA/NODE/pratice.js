// const http = require('http')

// const express = require('express')
// const app = express()
// const port = 3000


// app.use((req,res,next) => {
//     console.log(`${req.url} ${req.method} at ${new Date().toTimeString()}`)
//     next()
// })

// app.get("/" , (req,res) => {
//     res.send("this is the server from Express")
// })

// app.listen(port,()=>{
//     console.log(`Server is listening to the http://localhost:${port}`)
// })

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type' : 'text/palin'})
//     res.end("Helloo this is http server")
// })


// server.listen(port,() => {
//     console.log(`Server is listening to the http://localhost:${port}`)
// })


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/student',(req,res) => {
//     let {name,department} = req.query
//     res.send(`Here is the student details Name : ${name} , Department : ${department}`)
// })

// app.listen(port,()=>{
//     console.log(`Server is listening to the http://localhost:${port}`)
// })


const express = require('express')
const app = express()
const port = 3000

// app.get('/user/:num1/:num2', (req, res) => {
//     const { num1, num2 } = req.params
//     const num = Number(num1) + Number(num2)
//     res.send(`Sum of 2 numbers ${num1} & ${num2} is ${num}`)
// })


app.get('/user/:id1/:id2',(req,res) => {
    const {id1,id2} = req.params
    res.send(`entered id is ${id1} and ${id2}`)
})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
