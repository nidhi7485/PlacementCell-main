require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
//database connection
// const db= require('./config/mongoose');
const connectDB = require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')

//use the body
app.use(express.urlencoded({ extended: true }))

//use the cookieparser
app.use(cookieParser())

//setup for layouts
app.use(expressLayouts)
//extract all styles and scripts from layouts
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

//setup for view engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', require('./routes/index'))

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log(process.env.MONGO_URI)
    app.listen(port, () => console.log(`this server is listening on ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
