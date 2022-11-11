const mongoose = require('mongoose');
const validator = require('validator');

// User Schema


const User = mongoose.model('User', {
    fullName : {
        type : String,
        required : true
    },

    email : {
        type: String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(console.log("Inavlid Email"))
               
            }
        }
    },

    password : {
        type : String,
        required : true,
        
    }
});

module.exports = { User }