const mongoose = require('mongoose');
require("dotenv").config();


const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

function connectToMongodb(){
    mongoose.connect(MONGODB_CONNECTION_URL)

    mongoose.connection.on("connected", ()=> {
        console.log('sucessfully connected to database')
    })

    mongoose.connection.on("error", (err)=> {
        console.log(err)
        console.log('An error occured while trying to connect to database')
    })
}

module.exports = {
    connectToMongodb
}