const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/connection');
const cors = require("cors");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000


dotenv.config({path: './config/.env'});

connectDB();





// app.get('/user', (req,res) =>{
//     res.send("Hello World")
// });


app.use('/', require('./routes/routes'))




app.listen(PORT)
