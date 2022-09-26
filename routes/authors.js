const express = require("express");
const AuthorModelSchema = require("../model/authors");

const authorRoute = express.Router();

authorRoute.get("/", (req,res)=>{

    AuthorModelSchema.find({})
        .then((authors) =>{
            console.log(authors)
            res.status(200).send(authors)
        })
        .catch((err) =>{
            res.status(500).send(err)
        })
})

authorRoute.get("/:id", (req,res) =>{
    const authorId = req.params.id
    console.log(authorId)

    AuthorModelSchema.findById(authorId)
        .then((author) =>{
            res.status(200)
            res.send(author)
        })
        .catch((err) => {
            res.status(400)
            res.send({
                message : "An error occured book was not added"
            })

        })   
})

authorRoute.post("/", (req,res) =>{
    const author = req.body

    AuthorModelSchema.create(author)
        .then((author) =>{
            res.status(200)
            res.send(author)
        })
        .catch((err) => {
            res.status(400)
            res.send({
                message : "An error occured book  not found"
            })
        })
})

authorRoute.put("/:id", (req, res) =>{
    const authorId = req.params.id
    const update = req.body

    AuthorModelSchema.findByIdAndUpdate(authorId, update, {new:true})
        .then((update) =>{
            res.status(200)
            res.send(update)
        })
        .catch((err) =>{
            res.status(400)
            res.send({
                message : "An error occured book  not found, not updated"
            })  
        })
})

authorRoute.delete("/:id", (req,res) =>{
    const authorId = req.params.id

    AuthorModelSchema.findByIdAndDelete(authorId)
        .then((author) =>{
            res.status(200)
            res.send({
                message: "deletion sucessful",
                data: ""
            })
        })
        .catch((err) =>{
            res.status(400)
            res.send({
                message : "author deletion unsucessful"
            })  
        })
})

module.exports = authorRoute