const mongoose = require("mongoose");

const schema = mongoose.Schema;

const AuthorModelSchema = new schema ({
    firstname : {
        type: String,
        require: true
    },
    lastname : {
        type : String,
        require : true
    },
    DOB : {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model("authors", AuthorModelSchema);