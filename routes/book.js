const express = require('express');
const BookModelSchema = require("../model/book")

const bookRoute = express.Router();
//CRUD route

//read
bookRoute.get("/", (req, res)=>{

    BookModelSchema.find({})
        .then((books) =>{
            res.status(200).send(books)
        }).catch((err)=>{
            console.log(err)
            res.status(500).send(err.message)
        })
    //return all books
})
//read by id
bookRoute.get("/:id", (req, res)=>{
    //find and return book by id 
    const id = req.params.id;
    console.log(id)
    
    BookModelSchema.findById(id)
        .then((book) =>{
            res.status(200).send(book)
        }).catch((err) =>{
            console.log(err)
            res.status(400)
        })
})

//create
bookRoute.post("/", (req, res)=>{
    const book = req.body
    console.log(book);

    BookModelSchema.create(book)
        .then((book) => {
            res.status(201).send({
                message : "Book added sucesfully",
                data: book
            })
        }).catch((err) =>{
            res.status(400).send(err)
        })

    //also add created books to database
 
})

//update
bookRoute.put("/:id", (req, res)=>{
    //return all books
    const id = req.params.id;
    const book = req.body

    //perform update too book on database
    BookModelSchema.findByIdAndUpdate(id,book, {new:true})
        .then((book) =>{
            res.status(200).send(book)
        }).catch((err) =>{
            console.log(err)
            res.status(400).send(err)
        })
})

//delete 
bookRoute.delete("/:id", (req, res)=>{
    //return all books
    const id = req.params.id;
    BookModelSchema.findByIdAndDelete(id)
        .then((book) =>{
            res.status(200).send({
                message: "deletion sucessful",
                data: ""
            })
        }).catch((err) =>{
            console.log(err)
            res.status(400).send(err)
        })
})




module.exports = bookRoute