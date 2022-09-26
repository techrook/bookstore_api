const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BookModelSchema = new schema ({
    title: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require:true,
        max: [2022,"year must be less than or equal to 2022"]
    },
    isbn: {
        type: String,
        require: true,
        unique : [true, "ISBN must be unique"]
    },
    createAt : {
        type: Date,
        default:Date.now()
    },
    updatedAt : {
        type: Date,
        default:Date.now()
    }

})

module.exports = mongoose.model("books", BookModelSchema)