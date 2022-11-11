const express = require('express');
const route = express.Router();
const validator = require('validator');

const { User } = require('../model/user');

route.get('/user/getAll', (req,res) => {
    User.find({}, (err, data) => {
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })

});

// create user
route.post('/user/create', (req,res) => {
    const usr = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });
    usr.save((err, data) => {
        if(!err){
            res.status(200).json({code:200, message: "User Added", 
            createUser:data})
        }
        else{
            res.status(400).json({code:400, message: "Invalid Email"})
            
        }
         
    });

});

// update user
route.put('/user/update/:email', (req,res) => {
    
    const usr = {
        fullName: req.body.fullName,
        password: req.body.password
    };
    User.findOneAndUpdate({email: req.params.email}, { $set : usr}, {new:true}, (err,data) => {
        if(!err){
            res.status(200).json({code: 200, message:"User Updated Successfully",
            updateUser:data})
        }
        else{
            res.status(400).json({code: 400, message:"User Not Found"})
            console.log(err)

        }
    });

});

// delete user
route.delete('/user/delete/:email', (req,res) => {
    User.findOneAndDelete({email: req.params.email}, (err,data) =>{
        if(!err){
            res.status(200).json({code: 200, message:"User Deleted Successfully",
        deleteUser:data})
        }
        else{
            console.log(err)

        }
    })
})

module.exports = route;