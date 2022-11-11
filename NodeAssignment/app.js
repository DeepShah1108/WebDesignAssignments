const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/connection');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000


dotenv.config({path: './config/config.env'});

connectDB();





// app.get('/user', (req,res) =>{
//     res.send("Hello World")
// });


app.use('/', require('./routes/routes'))




app.listen(PORT)
