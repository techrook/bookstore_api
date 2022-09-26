const express = require('express');
const { connectToMongodb } = require('./db')
const bookRoute = require("./routes/book")
const authorRoute = require("./routes/authors")
require('dotenv').config();

const PORT = process.env.PORT;

const app = express()
//connecting to mongodb extance
connectToMongodb();
app.use(express.json());

app.use("/books", bookRoute)
app.use("/authors", authorRoute)
app.get("/", (req, res) =>{
    res.send("welcome home")
})

app.listen(PORT, ()=>{
    console.log(`server started at PORT : HTTP://localhost${PORT}`)
})