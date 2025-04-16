const Person = require ('./person')
const Dotenv = require ('dotenv')
const connectToDatabase = require('./src/database/connect')
const { connect } = require('mongoose')

Dotenv.config()
connectToDatabase()

// require("./modules/path")
// require('./modules/fs')
// require('./modules/http')
// require('./modules/express')

// const person = new Person('Lucas')

