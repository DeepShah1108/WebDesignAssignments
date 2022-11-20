const express = require('express');
const route = express.Router();
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const JWT_SECRET = "asdfghjkl()mnbvcxz"
route.get('/user/getAll', (req,res) => {
    User.find({}, (err, data) => {
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
});



// login

// route.post('/user/login', async (req,res) => {
//     const { email,password } = req.body
//     try{
//         if(!email || !password){
//             res.send({error: "All fields are mandatory" })
//         }
    
//         const user = await User.findOne({email : email})
    
//         if(!user){
//             res.send({error: "Incorrect email" })
//         }
    
//         const match = await bcrypt.compare(password, user.password)
    
//         if(!match){
//             res.send({error: "Incorrect Password" })
//         }
//     }catch(err){

//     }
   

// })



// create user
route.post('/user/create', async (req,res) => {
    const {fullName , email, password } = req.body

    try{
        if(!fullName || !email || !password){
            res.send({error: "All fields are mandatory" })
        }
        if(!validator.isEmail(email)){
            res.send({error: "Email is Invalid" })
        }
        if(!validator.isStrongPassword(password)){
            res.send({error: "Password not Strong"})
        }
        const exists = await User.findOne({email : email})
        if(exists){
            res.send({error: "Email already in use." })
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await User.create({ fullName, email, password : hashedPassword})
            res.status(200).json({user})
        }
    }catch(err){

    }
    
    // const hashedPassword = await bcrypt.hash(req.body.password, 10) 
    // User.findOne({email: req.body.email},(err, usr) => {
    //     if(usr){
    //         res.send({message: "User already registered"})
    //     }else{
    //         const usr = new User({
    //             fullName: req.body.fullName,
    //             email: req.body.email,
    //             password: hashedPassword
    //         });
    //         usr.save((err, data) => {
    //             if(!err){
    //                 res.status(200).json({code:200, message: "User Added", 
    //                 createUser:data})
    //             }
    //             else{
    //                 res.status(400).json({message: err})  
    //             }     
    //         });
    //     }
    // })
});

route.post('/user/login', async (req,res) => {
    const { email, password } = req.body

    const exists = await User.findOne({email : email})
        if(exists){
            if(await bcrypt.compare(password, exists.password)){
                res.send({ message : "Login Succesfull", user:exists})
            }else{
                res.send({ error: "Incorrect credentials"})
            }
        }else{
            res.send({ error : "User not registered"})
        }
    
})

// route.post('/user/login', async (req,res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email })
//     if(!user) {
//         res.status(400).json({code: 400, message: "User Not Found"})
//     }
//     else{
//         res.status(400).json({code: 400, message: "User not registered"})
//     }
//     if(user){
//         if(await bcrypt.compare(password, user.password)){
//             res.status(200).json({ code: 200, message: "Login succesful", user:user})
//         }else{
//             res.status(400).json({ code: 400, message: "Incorrect Email and Password" })
//         }
//     }
// })

// update user
route.put('/user/update/:email', async (req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
    const usr = {
        fullName: req.body.fullName,
        password: hashedPassword
    };
    User.findOneAndUpdate({email: req.params.email}, { $set : usr}, {new:true}, (err,data) => {
        if(!data){
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
    User.findOneAndDelete({email: req.params.email}, (err,data) =>{
        if(!data){
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