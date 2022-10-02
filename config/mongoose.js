const mongoose = require('mongoose')
const url =
  'mongodb+srv://nidhi:12345@node-express-projects.gssgbgv.mongodb.net/?retryWrites=true&w=majority'
const connectDB = (url) => {
  mongoose.connect(url)
}
module.exports = connectDB
