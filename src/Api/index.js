const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const db = require('./queries');

app.use(express.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/login', db.getUsers);