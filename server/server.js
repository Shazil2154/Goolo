
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const router = require('./routes/api')
app.use('/', router)

const PORT = process.env.PORT || 5000
app.listen (process.env.PORT || PORT, () =>
    console.log(`Server is up and running on port: ${PORT}`))