const mongoose = require('mongoose');
const validator = require('validator');


// User Schema

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique: true
    },

    password : {
        type : String,
        required : true,
    },
},{
    collection: "users"
})

module.exports = mongoose.model('User', userSchema)

