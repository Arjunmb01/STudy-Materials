const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})


app.get("/",(req,res) => {
    res.send("Heloooooooooooooooooooooooooooooooooooooooo")
})

app.listen(port,()=>{
    console.log(`server is listening to http://localhost:${port}`)
})