// const mongoose = require('mongoose')

// const connectDB = (url) => {
//   mongoose.connect(url)
// }
// module.exports = connectDB

const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/Placement-Cell');
mongoose.connect(
  'mongodb+srv://nidhi:12345@node-express-projects.gssgbgv.mongodb.net/?retryWrites=true&w=majority'
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'))

db.once('open', function () {
  console.log('Connected to Database :: MongoDB')
})

module.exports = db
