const exp = require("constants")
const express = require("express")
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
// Connect to database created in db/Connect
require('../db/connect')
// Get Collection class from register.js
const Student = require('../models/register')

// Middleware
app.use(express.static(path.join(__dirname, '../views')))

// Make express use JSON for showing Doc
app.use(express.json())

// Require and use Router from src/router/register.js
const router = require('../router/register')
app.use(router)


app.listen(port, ()=>{
    console.log("connected express")
})