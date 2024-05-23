const express = require("express");
const db = require('./Config/db');
const user = require('./routes/user')
const admin = require('./Routes/Admin')
require('dotenv').config()
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');



app.use(cors())
app.use(bodyparser.json())

db()

//user signup and loign details
app.use("/user",user)

//product details
app.use("/product",product)

//admin login & dashboard
app.use('/admin',admin)

app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`) 
})