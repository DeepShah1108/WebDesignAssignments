const express = require('express');
const route = express.Router();
const validator = require('validator');
const bcrypt = require('bcrypt');

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
route.post('/user/create', async (req,res) => {
  
    const hashedPassword = await bcrypt.hash(req.body.password, 10)   
    const usr = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword
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
route.put('/user/update/:email', async (req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
    const usr = {
        fullName: req.body.fullName,
        password: hashedPassword
    };
    const user = User.findOneAndUpdate({email: req.params.email}, { $set : usr}, {new:true}, (err,data) => {
        if(user == null){
            res.status(400).json({code: 400, message:"User Not Found"})
            
        }else if(!err){
            res.status(200).json({code: 200, message:"User Updated Successfully",
            updateUser:data})
        }
        else{
            console.log(err)

        }
    });

});

// delete user
route.delete('/user/delete/:email', (req,res) => {
    const user = User.findOneAndDelete({email: req.params.email}, (err,data) =>{
        if(user == null){
            res.status(400).json({code: 400, message:"User Not Found"})
        }
        else if(!err){
            res.status(200).json({code: 200, message:"User Deleted Successfully",
            deleteUser:data})
        }
        else{
            console.log(err)

        }
    })
})

module.exports = route;