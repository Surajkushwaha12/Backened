// console.log("Suraj Kushwaha with chai and code ");
require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000


app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.get('/twitter', (req, res)=>{
    res.send("Hello Twitter")
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/utube', (req, res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})