const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/friends', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))

app.listen(3000, () => console.log('server started'))